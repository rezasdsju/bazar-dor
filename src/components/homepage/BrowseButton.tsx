'use client'

const BrowseButton = () => {
    return (
        <button onClick={()=>document.getElementById('all-products')?.scrollIntoView({behavior:'smooth'})} className="bg-green-600 text-white rounded-xl px-4 py-1 cursor-pointer">সব পণ্য দেখুন</button>
    );
};

export default BrowseButton;