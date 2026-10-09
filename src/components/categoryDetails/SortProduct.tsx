'use client'

import type { IProduct } from "@/types/type.product";
import { useState } from "react";
import ProductCard from "../shared/ProductCard";

const SortProduct = ({products}:{products:IProduct[]}) => {
    const [sortBy, setSortBy] = useState<'default'|'komthekebeshi'|'beshithekekom'>('default')
    const sortProducts = (products:IProduct[])=>{
        const newSortedProducts = [...products]
        if (sortBy==='komthekebeshi'){
            newSortedProducts.sort((a,b)=>a.today-b.today)
        }
        if (sortBy==='beshithekekom'){
            newSortedProducts.sort((a,b)=>b.today-a.today)
        }
        if (sortBy==='default'){
            return products
        }
        return newSortedProducts
    }
    const sortedProducts = sortProducts(products)
    return (
<div>
                <div className="flex items-center justify-end bg-white px-5 py-5 border border-gray-200 rounded-2xl">
                    <div className="flex items-center gap-2">
                        <h3>সাজান</h3>

                        <select onChange={(e)=>setSortBy(e.target.value as 'default'|'komthekebeshi'|'beshithekekom')} defaultValue="ডিফল্ট" className="select select-neutral">
                            <option value={'default'}>ডিফল্ট</option>
                            <option value={'komthekebeshi'}>দাম: কম থেকে বেশি</option>
                            <option value={'beshithekekom'}>দাম: বেশি থেকে কম</option>
                     
                        </select>

                    </div>
                </div>
                                <h3 className="mt-6 mb-2 text-neutral-500">মোট {products.length.toLocaleString('bn-BD')} টি পণ্য দেখানো হচ্ছে</h3>
                <div className="grid grid-cols-1 min-[320px]:grid-cols-2 sm:grid-cols-3 gap-5">
                    {
                        sortedProducts.map((product:IProduct)=><ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
</div>
    );
};

export default SortProduct;