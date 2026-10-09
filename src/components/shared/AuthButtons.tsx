'use client'
import {  useSession } from "@/lib/auth-client";
import Link from "next/link";


import Image from "next/image";

import { VscTriangleUp } from "react-icons/vsc";
import { useState } from "react";
import AuthItemsCard from "./AuthItemsCard";
import { FaUser } from "react-icons/fa";

const AuthButtons = () => {
    const [showAuthItems, setShowAuthItems] = useState<boolean>(false)
    
    const { data: session } = useSession()
    




    return (
        <div className="relative">
            {session?.user ?
                <div className="flex items-center gap-2">
                    {
                        session?.user?.image?
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100  rounded-full ring ring-offset-1">
                                <Image src={session?.user?.image} alt='profileImage' width={20} height={20} />
                            </div>
                        </div>:
                        <span><FaUser /></span>
                    }
                    <div onClick={()=>setShowAuthItems((prev)=>!prev)} className="flex items-center cursor-pointer">

                        <p >{session.user.name}</p>
                        <span ><VscTriangleUp className={`transition-transform ${showAuthItems?'rotate-180':''}`}/></span>
                    </div>


                </div> :
                <div className="flex items-center gap-2 ">
                    <Link href={`/sign-in`}><button className="font-bold cursor-pointer">সাইন ইন</button></Link>
                    <Link href={`/sign-up`}><button className="btn bg-green-600 font-bold text-white">সাইন আপ</button></Link>
                </div>}


                {(showAuthItems && session?.user) && <AuthItemsCard setShowAuthItems={setShowAuthItems}></AuthItemsCard>}
        </div>

    );
};

export default AuthButtons;