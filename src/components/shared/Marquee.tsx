import { IoTriangleSharp } from "react-icons/io5";
import MarqueeText from "react-marquee-text";
import 'react-marquee-text/dist/styles.css'

import type { IProduct } from "@/types/type.product";
const Marquee = async () => {
    'use cache'
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const products = await res.json()

    const toBanglaNumber = (value: number) => {
        return value.toLocaleString('bn-BD')
    }
    return (
        <div className="bg-base-150 py-2 px-2 border-b border-gray-100 bg-white">
            <MarqueeText direction="right" duration={20}  >
                {
                    products.map((product:IProduct) => <div key={product.id} className="px-4">
                        <div className="flex items-center gap-2">
                            <span>{product.image}</span>
                            <p className="font-bold">{product.nameBn}</p>
                            <p className="text-neutral-700">{toBanglaNumber(product.today)} টাকা/{product.unit==='kg'?'কেজি':product.unit==='dozen'?' ডজেন':product.unit==='litre'?'লিটার':'পিস'}</p>
                            {product.change.dir === 'up' && <span className="flex items-center text-red-700"><IoTriangleSharp /><p>{toBanglaNumber(product.change.pct)}%</p></span>}
                            {product.change.dir === 'down' && <span className="flex items-center text-green-600"><IoTriangleSharp className="rotate-180" /><p>{toBanglaNumber(Math.abs(product.change.pct))}%</p></span>}
                        </div>



                    </div>)
                }
            </MarqueeText>
        </div>
    );
};

export default Marquee;