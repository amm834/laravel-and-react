import {useNavigate, useParams} from "react-router-dom";

export const ArticleDetail = () => {
    const {id} = useParams()
    
    return (
        <>
            <h1>Article Detail</h1>
            <p>{id}</p>
        </>
    )
}
