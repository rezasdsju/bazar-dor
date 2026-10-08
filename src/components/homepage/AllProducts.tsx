
import ProductCard from "../shared/ProductCard";

import type { IProduct } from "@/types/type.product";

const AllProducts = async () => {
    'use cache'
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const products: IProduct[] = await res.json()
    
    return (
        <div className="mx-2 my-8">
            <div className="max-w-7xl mx-auto ">
                <div className="mb-2">
                    <h3 className="text-xl font-bold">সব পণ্য</h3>
                    <h2 className="text-sm text-neutral-500">মোট {products.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                    {
                        products.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;