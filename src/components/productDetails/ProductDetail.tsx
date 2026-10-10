import type { IProduct } from "@/types/type.product";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoTriangleSharp } from "react-icons/io5";
const ProductDetail = async ({ params }: { params: { productId: string } }) => {
    const { productId } = await params
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${productId}`)
    if (!res.ok){
        notFound()
    }
    const product: IProduct = await res.json()


    const minPrices = product.markets.map((market) => market.min)
    const minPrice = Math.min(...minPrices)
    const maxPrices = product.markets.map((market) => market.max)
    const maxPrice = Math.min(...maxPrices)
    const totalPrice = [...minPrices, ...maxPrices]
    const averagePrice = Math.ceil(totalPrice.reduce((total, price) => (total + price), 0) / totalPrice.length)
    const sortedMarrketsByLowestPrice = [...product.markets].sort((a, b) => a.min - b.min)
    const sortedMarketsByHighestPrice = [...sortedMarrketsByLowestPrice].sort((a, b) => a.max - b.max)
    return (
        <div>
            <div className="max-w-7xl mx-auto px-2">
                <div className="my-5">
                    <Link href={'/'}>হোম <span className="text-gray-400"> &gt;</span></Link>
                    <Link href={`/categoryDetail/${product.category}`}>{product.categoryNameBn} <span className="text-gray-400"> &gt; </span> </Link>
                    <Link href={`/productDetail/${product.id}`}>{product.nameBn}</Link>
                </div>
                <div>
                    <div className="flex flex-col min-[380px]:flex-row gap-5 min-[380px]:gap-0 items-center justify-between   border border-gray-200 bg-white px-3 py-5 rounded-2xl">
                        <div className="flex items-center  gap-2">
                            <span className="bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">{product.image}</span>
                            <div>
                                <h2 className="text-2xl font-bold">{product.nameBn}</h2>
                                <p className="text-xs text-neutral-400">প্রতি কেজি · {product.categoryNameBn}</p>
                                {product.change.dir === 'up' && <p className="text-sm text-neutral-500">গতকালের তুলনায় আজ দাম বেড়েছে · {(product.today - product.yesterday).toLocaleString('bn-BD')} টাকা</p>}
                                {product.change.dir === 'down' && <p className="text-sm text-neutral-500">গতকালের তুলনায় আজ দাম কমেছে · {(Math.abs(product.today - product.yesterday)).toLocaleString('bn-BD')} টাকা</p>}
                                {product.change.dir === 'flat' && <p className="text-sm text-neutral-500">গতকালের দাম অপরিবর্তিত রয়েছে</p>}
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-100 border border-gray-200 px-3 py-2 mx-2 rounded-2xl">
                                <h3 className="text-neutral-500">আজকের দাম</h3>
                                <p className="font-bold text-center">{product.today.toLocaleString('bn-BD')}</p>
                                <p className="text-neutral-500">টাকা/{product.unit === 'kg' ? 'কেজি' : product.unit === 'dozen' ? ' ডজেন' : product.unit === 'litre' ? 'লিটার' : 'পিস'}</p>
                                <div className="flex items-center justify-center gap-1 bg-gray-100 px-2 min-[450px]:px-5 py-1 rounded-2xl">
                                    <span className={`text-[9px] ${product.change.dir === 'up' ? 'text-red-700' : product.change.dir === 'down' ? 'text-green-700' : 'text-black'}`}>{product.change.dir === 'up' ? <IoTriangleSharp /> : product.change.dir === 'down' ? <IoTriangleSharp className="rotate-180" /> : '---'}</span>
                                    <p className={`${product.change.dir === 'up' ? 'text-red-700' : product.change.dir === 'down' ? 'text-green-700' : 'text-black'} text-xs`}>{Math.abs(product.change.pct).toLocaleString('bn-BD')}%</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="my-10 border border-gray-200 bg-white rounded-2xl px-3 py-3">
                        <h2 className="font-bold text-xl pb-2">দামের সারসংক্ষেপ</h2>
                        <div className="grid grid-cols-1 min-[280px]:grid-cols-2 min-[480px]:grid-cols-3 gap-3">
                            <div className="px-3 py-2 border border-gray-200 rounded-2xl">
                                <h4 className="text-xs">সর্বনিম্ন দাম</h4>
                                <p className="text-green-600 font-semibold">{minPrice} <span className="text-sm">টাকা</span></p>
                                <p className='text-xs text-neutral-500'>সবচেয়ে কম দামের বাজার</p>
                            </div>
                            <div className="px-3 py-2 border border-gray-200 rounded-2xl">
                                <h4 className="text-xs">সর্বাধিক দাম</h4>
                                <p className="text-red-600 font-semibold">{maxPrice} <span className="text-sm">টাকা</span></p>
                                <p className='text-xs text-neutral-500'>সবচেয়ে বেশি দামের বাজার</p>
                            </div>
                            <div className="px-3 py-2 border border-gray-200 rounded-2xl">
                                <h4 className="text-xs">গড় দাম</h4>
                                <p className="text-green-700 font-semibold">{averagePrice} <span className="text-sm">টাকা</span></p>
                                <p className='text-xs text-neutral-500'>প্রতি কেজি-এর হিসাবে</p>
                            </div>
                        </div>


                        <div className="my-5">
                            <h2 className="font-bold text-xl pb-2">বাজারভিত্তিক আজকের দাম</h2>
                            <div className="border border-gray-200 rounded-2xl  overflow-x-auto">
                                <div className="min-w-85">
                                    <div className="grid grid-cols-5 items-center justify-center text-center text-neutral-500 border-b border-gray-100 px-2 py-2">
                                        <p className="text-left">বাজার</p>
                                        <p className="text-left">বিভাগ</p>
                                        <p className="text-left">সর্বনিম্ন</p>
                                        <p className="text-left">সর্বাধিক</p>
                                        <p className="text-right">গড়</p>
                                    </div>
                                    {
                                        sortedMarketsByHighestPrice.map((market, index) => <div key={index} className={`${index % 2 == 0 ? 'bg-gray-50' : ''} grid grid-cols-5 items-center justify-center text-center border-b border-gray-400 last:border-b-0  px-2 py-2`}>
                                            <p className="text-left">{market.market}</p>
                                            <p className="text-left">{market.division}</p>
                                            <p className="text-left">{market.min.toLocaleString('bn-BD')} টাকা</p>
                                            <p className="text-left">{market.max.toLocaleString('bn-BD')} টাকা</p>
                                            <p className="text-right font-bold">{((market.max + market.min) / 2).toLocaleString('bn-BD')} টাকা</p>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;