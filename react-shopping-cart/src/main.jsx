import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider} from "react-router-dom";
import router from "./router/index.jsx";
import {ProductContextProvider} from "./context/ProductContext";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ProductContextProvider>
            <RouterProvider router={router}/>
        </ProductContextProvider>
    </React.StrictMode>
)
