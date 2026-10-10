'use client'
import { AiFillGithub } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React from "react";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const SignInPage = () => {
    const handleSignIn = async(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries()) as {email:string, password:string}
        console.log('userData: ',userData)
        const {data:resData, error} = await signIn.email({
            email:userData.email,
            password:userData.password,
            
        })
        console.log('resData: ',resData)
        if (resData){
            toast.success('সফলভাবে সাইন ইন সম্পন্ন হয়েছে')
            redirect('/')
        }
        if (error){
            toast.error('সাইন ইন সম্পন্ন হয় নি')
        }
    }

    const handleGoogleSignIn = async()=>{
        const data = await signIn.social({
            provider:'google'
        })
        console.log('google sign in data: ',data)
    }
    const handleGithubSignIn = async()=>{
        const data = await signIn.social({
            provider:'github'
        })
        console.log('github sign in data: ',data)
    }
    return (
        <div className="max-w-120 mx-auto my-10 px-2">
            <div className="text-center my-4">
                <h2 className="font-bold text-2xl">সাইন ইন</h2>
                <p className="text-neutral-500">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            </div>
            <div className=" border border-gray-200  bg-white  rounded-2xl px-2 min-[380px]:px-5 py-2">
                <form onSubmit={handleSignIn}>
                    <fieldset className="fieldset bg-white  rounded-box   ">



                        <label className="label">ইমেইল</label>
                        <input name="email" type="email" className="input w-full" placeholder="you@example.com" required/>

                        <label className="label">পাসওয়ার্ড</label>
                        <input name="password" type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" required/>

                        <button type="submit" className="btn bg-green-600 text-white mt-4">সাইন ইন</button>
                    </fieldset>
                </form>
                <div>
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-5 flex items-center border-t border-gray-200" ></div>
                        <span className="col-span-2 text-center">অথবা</span>
                        <div className="col-span-5 flex items-center border-t border-gray-200" ></div>
                    </div>
                    <div className="flex gap-3">
                        <div onClick={handleGoogleSignIn} className='flex items-center border border-gray-200 rounded-xl px-3 py-1 gap-1 cursor-pointer'>
                            <span><FcGoogle /></span>
                            <button className="cursor-pointer">Google দিয়ে চালিয়ে যান</button>
                        </div>
                        <div onClick={handleGithubSignIn} className='flex items-center border border-gray-200 rounded-xl px-3 py-1 gap-1 cursor-pointer'>
                            <span><AiFillGithub /></span>
                            <button className="cursor-pointer">GitHub দিয়ে চালিয়ে যান</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center my-3">
                        <span className="font-bold">অ্যাকাউন্ট নেই? <Link href={'/sign-up'} className="text-green-500">সাইন আপ করুন</Link></span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center my-5">
                <Link href='/' className="flex items-center gap-1">
                    <span><FaArrowLeftLong /></span>
                    <span className="text-neutral-400"> হোম পেজে ফিরে যান</span>
                </Link>

            </div>
        </div>
    );
};

export default SignInPage;