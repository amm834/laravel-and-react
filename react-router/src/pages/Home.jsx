import {Link, useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/about')}>Go to about page</button>
        </>
    )
}