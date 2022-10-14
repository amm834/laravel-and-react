import {NavBar} from "../components/NavBar";

const MainLayout = (Component) => ({props}) => {
    return (
        <>
            <NavBar/>
            <main className="container mt-3">
                <Component {...props}/>
            </main>
        </>
    )
}

export default MainLayout