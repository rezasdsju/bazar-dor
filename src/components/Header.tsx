

import Image from "next/image";



const Header = () => {
    

        const date = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' });

    return (
        <div className="flex items-center justify-between max-w-7xl py-2 ">
            <div className="flex items-center gap-2">

                <button className="btn bg-green-700 rounded-2xl py-6"><Image src={'/logo-icon.png'} alt="বাজার দর" width={20} height={20}></Image></button>
                <div>
                    <h2 className="font-bold text-2xl">বাজার দর</h2>
                    <p className="text-sm min-[400px]:text-base text-neutral-700">{date}</p>
                </div>

            </div>
            <div className="flex items-center gap-2 ">
                <button className="font-bold">সাইন ইন</button>
                <button className="btn bg-green-600 font-bold text-white">সাইন আপ</button>
            </div>
        </div>
    );
};

export default Header;