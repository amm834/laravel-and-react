import useFetch from "../hooks/useFetch.js";
import {ProductCard} from "../components/ProductCard";
import {Loader} from '../components/Loader.jsx'
import {useProducts} from "../context/ProductContext.jsx";

export function Store() {
    const {data: products, loading} = useFetch('https://fakestoreapi.com/products')

    return (
        <div className="row gap-3">
            {loading ? <Loader/> : products?.map(product =>
                <ProductCard
                    key={product.id}
                    product={product}
                />)}
        </div>
    )
}