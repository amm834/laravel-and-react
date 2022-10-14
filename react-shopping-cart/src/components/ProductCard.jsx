import {format} from "../utils/currencyFormatter";
import {useProducts} from "../context/ProductContext.jsx";

export function ProductCard({product}) {
    const {addToCart} = useProducts()

    return (
        <div className="col-md-3 card" style={{height: "50rem"}}>
            <img src={product.image}
                 alt="Product Image" style={{height: '25rem', objectFit: "cover"}}/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h3>{format(product.price)}</h3>
                <button className="btn btn-primary d-block w-100"
                        onClick={() => addToCart(product)}
                >
                    + Add to cart
                </button>
            </div>
        </div>
    )
}