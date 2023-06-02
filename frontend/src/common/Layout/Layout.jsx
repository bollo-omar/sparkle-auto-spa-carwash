import {Navbar} from "../Navbar/Navbar.jsx";

export const Layout = ({children})=>
    (
        <>
            <Navbar/>
            {children}
        </>
    )