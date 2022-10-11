import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home.jsx";
import {About} from "../pages/About.jsx";
import {ArticleDetail} from "../pages/Article/ArticleDetail";

const NotFound = () => <h1>404 | Not Found</h1>

const RouterView = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/article/:id" element={<ArticleDetail/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
export default RouterView;