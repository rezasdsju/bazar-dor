
import type { IProduct } from "@/types/type.product";
import { IoTriangleSharp } from "react-icons/io5";
const ProductCard = ({ product }: { product: IProduct }) => {
    return (
        <div>
            <div className="bg-white border border-gray-200 rounded-xl px-2 py-2">
                <div className="flex items-center gap-2  ">
                    <span className="px-3 py-2 rounded-xl bg-gray-200">{product.image}</span>
                    <div>
                        <h3 className="font-bold">{product.nameBn}</h3>
                        <p className="text-neutral-600 text-xs">প্রতি {product.unit === 'kg' ? 'কেজি' : product.unit === 'dozen' ? ' ডজেন' : product.unit === 'litre' ? 'লিটার' : 'পিস'}</p>
                    </div>
                </div>
                <div className="flex justify-between pt-2">
                    <div>
                        <h3 className="text-sm text-neutral-600">আজকের দাম</h3>
                        <p className="font-bold">{product.today.toLocaleString('bn-BD')} <span className="text-xs"> টাকা</span></p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center justify-center gap-1 bg-gray-100 px-2 min-[450px]:px-5 py-1 rounded-2xl">
                            <span className={`text-[9px] ${product.change.dir==='up'?'text-red-700':'text-green-700'}`}>{product.change.dir==='up'?<IoTriangleSharp />:<IoTriangleSharp className="rotate-180" />}</span>
                            <p className={`${product.change.dir==='up'?'text-red-700':'text-green-700'} text-xs`}>{product.change.pct.toLocaleString('bn-BD')}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;