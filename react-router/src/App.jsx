import {Routes, Route, Link} from "react-router-dom";
import RouterView from "./router/RouterView.jsx";

export default function App() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/article/1">Article with param</Link>
                </li>
            </ul>
            <RouterView/>
        </>
    )
}