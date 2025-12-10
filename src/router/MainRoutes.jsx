import { Routes, Route } from "react-router-dom";
import ROUTES from "./routes";

import Home from "../pages/Home";
import About from "../pages/About";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Jewelery from "../pages/Jewelery";
import Electronics from "../pages/Electronics";
import Contact from "../pages/Contact";


const MainRoutes = () => {
    return (
        <>
        <Routes>
            <Route path={ROUTES.HOME} element={<Home /> } ></Route>
            <Route path={ROUTES.ABOUT} element={<About /> } ></Route>
            <Route path={ROUTES.WOMEN} element={<Women /> } ></Route>
            <Route path={ROUTES.MEN} element={ <Men /> } ></Route>
            <Route path={ROUTES.JEWELERY} element={ <Jewelery /> } ></Route>
            <Route path={ROUTES.ELECTRONICS} element={ <Electronics /> } ></Route>
            <Route path={ROUTES.CONTACT} element={<Contact/>}></Route>
        </Routes>
        </>
    )
    
}

export default MainRoutes;