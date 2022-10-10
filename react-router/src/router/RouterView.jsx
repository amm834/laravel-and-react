import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home.jsx";
import {About} from "../pages/About.jsx";

const RouterView = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    )
}
export default RouterView;