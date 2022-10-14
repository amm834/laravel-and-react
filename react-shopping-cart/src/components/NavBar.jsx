import {NavLink} from "react-router-dom";
import {useProducts} from "../context/ProductContext.jsx";

export function NavBar() {
    const {products} = useProducts()

    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm border-bottom sticky-top">
            <div className="container">
                <NavLink to="/" className="navbar-brand">Ryukia</NavLink>
                <NavLink to="/" className="nav-link mt-1">Home</NavLink>
                <NavLink to="/store" className="nav-link mt-1 ms-2">Store</NavLink>

                <div className="ms-auto d-flex gap-3">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/carts" className="nav-link">
                        Cart
                        <span className="bg-danger text-white px-1 py-1 rounded">
                            {products.length}
                        </span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}