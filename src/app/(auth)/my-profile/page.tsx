'use client'
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import React from "react";
import { toast } from "react-toastify";

import Image from "next/image";
import { FaReply } from "react-icons/fa";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
// import { redirect } from "next/navigation";


const MyProfilePage = () => {
    const { data: session } = useSession()
    const handleUpdateUser = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        // const userData = Object.fromEntries(formData.entries()) as { image: string, name: string }
        const name = formData.get('name') as string
        const image = formData.get('image') as string
        const { data: resData, error } = await updateUser({
            name: name.trim() || session?.user?.name || '',
            image: image.trim() || session?.user?.image || ''
        })
        if (resData) {
            toast.success('সফলভাবে প্রোফাইল আপডেট সম্পন্ন হয়েছে')
        }
        if (error) {
            toast.error('প্রোফাইল আপডেট সম্পন্ন হয়নি')
        }
    }



    const handleSignOut = async () => {
        const { data: resData, error } = await signOut()
        if (resData) {
            toast.success('সফলভাবে সাইন আউট সম্পন্ন হয়েছে!')
            // redirect('/')
            window.location.replace('/');
        }
        if (error) {
            toast.error('দুঃখিত সাইন আউট সম্পন্ন হয় নি!')
        }
    }
    return (
        <div className="max-w-2xl mx-auto  my-10 px-2">
            <div >
                <h2 className="font-bold text-2xl">আমার প্রোফাইল</h2>
                <p className="text-neutral-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>
            <div className="flex flex-col min-[385px]:flex-row gap-4 min-[385px]:gap-0 items-center justify-between border border-gray-200 rounded-2xl bg-white px-3 py-4 my-5">
                <div className="flex items-center gap-2">
                    {
                        session?.user?.image &&
                        <div className="bg-gray-100 border border-gray-200 rounded-xl px-1 py-1 ">
                            <Image src={session?.user?.image} alt={session?.user?.name} width={50} height={50} className="rounded-xl"></Image>
                        </div>
                    }
                    <div>
                        <h3 className="text-xl font-bold">{session?.user?.name}</h3>
                        <p className="text-neutral-500">{session?.user.email}</p>
                    </div>
                </div>

                <div onClick={handleSignOut} className="flex items-center justify-center gap-2 text-red-500 border border-red-500 px-3 py-2 rounded-xl cursor-pointer">
                    <span ><FaReply /></span>

                    <span className="font-semibold">সাইন আউট</span>
                </div>

            </div>

            <div className="bg-white border border-gray-200 rounded-2xl px-3 py-3">
                <h3>তথ্য</h3>
                <form onSubmit={handleUpdateUser}>
                    <fieldset className="fieldset bg-white   w-full  p-4">

                        <label className="label">নাম</label>
                        <input name="name" type="text" className="input w-full" placeholder="আহমেদ খালিল" />

                        <label className="label">ছবির লিংক</label>
                        <input name="image" type="url" className="input w-full" placeholder="ছবির ইউ আর এল" />


                        <button className="btn bg-green-600 mt-4 text-white">আপডেট</button>
                    </fieldset>
                </form>
            </div>


            <div className="flex items-center justify-center my-7">
                <Link href='/' className="flex items-center gap-1">
                    <span><FaArrowLeftLong /></span>
                    <span className="text-neutral-400"> হোম পেজে ফিরে যান</span>
                </Link>

            </div>
        </div>
    );
};

export default MyProfilePage;