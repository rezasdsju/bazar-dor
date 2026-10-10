import type { IProduct } from "@/types/type.product";
import SortProduct from "./SortProduct";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
const Details = async ({ params }: { params: { slug: string } }) => {
    'use cache'
    const { slug } = await params
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`)
    const products: IProduct[] = await res.json()
    if (!products || products.length === 0) {
        notFound()
    }
    const categoryName = products[0].categoryNameBn
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-2">
                <div className="flex items-center gap-2 bg-white border border-gray-200  rounded-2xl my-10 px-3 py-2">
                    <span>{products[0].categoryIcon}</span>
                    <div>
                        <h2 className="text-2xl font-bold">{categoryName}</h2>
                        <p className="text-neutral-500">{products.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
                <SortProduct products={products}></SortProduct>

                <div className="flex items-center justify-center my-7">
                    <Link href='/' className="flex items-center gap-1">
                        <span><FaArrowLeftLong /></span>
                        <span className="text-neutral-400"> হোম পেজে ফিরে যান</span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Details;