import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/Home";
import {Store} from "../pages/Store";
import MainLayout from "../layouts/Main.layout.jsx";
import {About} from "../pages/About";
import {Carts} from "../pages/Carts.jsx";

const HomeComponent = MainLayout(Home)
const AboutComponent = MainLayout(About)
const StoreComponent = MainLayout(Store)
const CartsComponent = MainLayout(Carts)

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeComponent/>
    },
    {
        path: '/about',
        element: <AboutComponent/>
    },
    {
        path: '/store',
        element: <StoreComponent/>
    },
    {
        path: '/carts',
        element: <CartsComponent/>
    },
])
export default router