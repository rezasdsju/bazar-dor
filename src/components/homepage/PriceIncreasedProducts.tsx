

const PriceIncreasedProducts = async() => {
    'use cache'
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const products = await res.json()
    const priceIncreasedProducts = products.filter(product=>product.change.dir==='up')
    return (
        <div>
            {priceIncreasedProducts.length}
        </div>
    );
};

export default PriceIncreasedProducts;