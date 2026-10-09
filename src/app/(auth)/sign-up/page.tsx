'use client'
import { AiFillGithub } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React from "react";
import { signUp } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const SignUpPage = () => {
    const handleSignUp = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries()) as { name: string, email: string, password: string, ensurePassword: string }
        const strongPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(userData.password);

        if (!strongPassword) {
            toast.error('অনুগ্রহ করে শক্তিশালী পাসওয়ার্ড ব্যবহার করুন');
            return;
        }
        if (userData.password !== userData.ensurePassword) {
            toast.error('পাসওয়ার্ড মিল হয় নি!')
            return
        }
        // console.log('user data before submit: ',userData)
        const { data: resData, error } = await signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password
        })
        if (resData) {
            toast.success('সাইন আপ সফলভাবে সম্পন্ন হয়েছে')
            redirect('/')
        }
        if (error) {
            toast.error('সাইন আপ সম্পন্ন হয়নি')
        }
        // console.log('resData: ',resData)
    }
    return (
        <div className="max-w-120 mx-auto my-10 px-2">
            <div className="text-center my-4">
                <h2 className="font-bold text-2xl">অ্যাকাউন্ট তৈরি করুন</h2>
                <p className="text-neutral-500">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            </div>
            <div className=" border border-gray-200  bg-white  rounded-2xl px-2 min-[380px]:px-5 py-2">
                <form onSubmit={handleSignUp}>
                    <fieldset className="fieldset bg-white  rounded-box   ">


                        <label className="label">নাম</label>
                        <input name="name" type="text" className="input w-full" placeholder="রহিম উদ্দিন" required />

                        <label className="label">ইমেইল</label>
                        <input name="email" type="email" className="input w-full" placeholder="you@example.com" required />

                        <label className="label">পাসওয়ার্ড</label>
                        <input name='password' type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" required />
                        <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
                        <input name="ensurePassword" type="password" className="input w-full" placeholder="পাসওয়ার্ড নিশ্চিত করুন" required />

                        <button type="submit" className="btn bg-green-600 text-white mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                    </fieldset>
                </form>
                <div>
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-5 flex items-center border-t border-gray-200" ></div>
                        <span className="col-span-2 text-center">অথবা</span>
                        <div className="col-span-5 flex items-center border-t border-gray-200" ></div>
                    </div>
                    <div className="flex gap-3">
                        <div className='flex items-center border border-gray-200 rounded-xl px-3 py-1 gap-1'>
                            <span><FcGoogle /></span>
                            <h3>Google দিয়ে চালিয়ে যান</h3>
                        </div>
                        <div className='flex items-center border border-gray-200 rounded-xl px-3 py-1 gap-1'>
                            <span><AiFillGithub /></span>
                            <h3>GitHub দিয়ে চালিয়ে যান</h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center my-3">
                        <span className="font-bold">অ্যাকাউন্ট আছে? <span className="text-green-500">সাইন ইন করুন</span></span>
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

export default SignUpPage;