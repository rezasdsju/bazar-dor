import { connection } from "next/server";
import Image from "next/image";
import BannerImage from '@/assets/bazar-hero.png'
import BrowseButton from "./BrowseButton";
const Banner = async() => {
    await connection()
    const date = new Date().toLocaleDateString('bn-BD', {dateStyle:'full'})
    return (
<div className="mx-2 ">
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl  my-5 sm:my-10 px-2 sm:px-5 py-3 sm:py-5 ">
            <div className="space-y-4">
                <button className="bg-green-50 text-green-500 font-bold text-xl rounded-3xl px-3 py-1">{date}</button>
                <h2 className="font-bold text-3xl">আজকের বাজারের দাম এক নজরে</h2>
                <p>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <BrowseButton></BrowseButton>
            </div>
            <div className="mx-auto">
                <Image src={BannerImage} alt="Banner" width={220} height={220} className="mx-auto"></Image>
            </div>
        </div>
</div>
    );
};

export default Banner;