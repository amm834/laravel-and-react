import {useProducts} from "../context/ProductContext.jsx";
import {format} from "../utils/currencyFormatter.js";

export function Carts() {

    const {
        products,
        removeFromCart,
        increaseProductQuantity,
        decreaseProductQuantity
    } = useProducts();

    return (
        <>
            <h1>Your carts</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody>
                {products.length === 0 ? (
                    <tr>
                        <td colSpan="6" className="text-center my-3">No products in this cart</td>
                    </tr>
                ) : products.map(product =>
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>
                            <img src={product.image} alt={product.title} style={{width: "100px", height: '100px'}}/>
                        </td>
                        <td>{product.price}</td>
                        <td>
                            <button className="btn btn-danger"
                                    onClick={() => decreaseProductQuantity(product)}
                            >-
                            </button>
                            <span className="mx-3">{product.qty}</span>
                            <button className="btn btn-success"
                                    onClick={() => increaseProductQuantity(product)}
                            >+
                            </button>
                        </td>
                        <td>{product.price * product.qty}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove</button>
                        </td>
                    </tr>
                )}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="4" className="text-end">Total</td>
                    <td colSpan="2">{format(products.reduce((prev, product) => prev += product.qty * product.price, 0))}</td>
                </tr>
              </tfoot>
            </table>
        </>
    )
}