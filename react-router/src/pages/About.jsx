import {useNavigate} from "react-router-dom";

export const About = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>About page</h1>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    )
}