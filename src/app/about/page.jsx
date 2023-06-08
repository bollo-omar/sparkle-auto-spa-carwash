import {Navbar} from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Page() {

    return (
        <>
            <main className="bg-gray-100">
                <Navbar/>
                <h2>About</h2>
            </main>
            <Footer/>
        </>
    )
}