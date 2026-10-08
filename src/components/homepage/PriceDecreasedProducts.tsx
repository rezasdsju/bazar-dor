import { IoTriangleSharp } from "react-icons/io5";
import ProductCard from "../shared/ProductCard";

import type { IProduct } from "@/types/type.product";

const PriceDecreasedProducts = async () => {
    'use cache'
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const products: IProduct[] = await res.json()

    const topSixPriceDecreasedProducts = products.filter(product=>product.change.dir==='down').sort((a,b)=>Math.abs(b.change.pct)-Math.abs(a.change.pct)).slice(0,6)
    return (
        <div className="mx-2 my-8">
            <div className="max-w-7xl mx-auto ">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-700 "><IoTriangleSharp className="rotate-180" /></span><h2 className="font-bold text-xl  ">আজ দাম কমেছে</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                    {
                        topSixPriceDecreasedProducts.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PriceDecreasedProducts;