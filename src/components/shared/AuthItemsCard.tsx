'use client'
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FaReply, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";


const AuthItemsCard = ({setShowAuthItems}:{setShowAuthItems:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const { data: session } = useSession()
    const handleSignOut = async () => {
        const { data: resData, error } = await signOut()
        if (resData) {
            // toast.success('সফলভাবে সাইন আউট সম্পন্ন হয়েছে!')
            redirect('/')
        }
        if (error) {
            toast.error('দুঃখিত সাইন আউট সম্পন্ন হয় নি!')
        }
    }
    return (
        <div className="absolute right-5 top-full w-50 z-50  bg-white border border-gray-200 rounded-2xl  px-3 py-5 " >
            <div className="space-y-4">
                <div>
                    <h3>{session?.user?.name}</h3>
                    <p className="text-neutral-400 text-sm">{session?.user?.email}</p>
                </div>
                <div className="flex items-center gap-1">
                    <span><FaUser /></span>
                    <Link href={`/my-profile`}><span className="font-bold cursor-pointer">আমার প্রোফাইল</span></Link>
                </div>
                <div onClick={()=>{handleSignOut(); setShowAuthItems(false)}} className="flex items-center  gap-2 text-red-500   cursor-pointer">
                    <span ><FaReply /></span>

                    <span className="font-semibold">সাইন আউট</span>
                </div>
            </div>
        </div>
    );
};

export default AuthItemsCard;