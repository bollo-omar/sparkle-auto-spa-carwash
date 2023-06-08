import {Navbar} from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contacts() {
    return (
        <>
            <main className="bg-white-100 w-full">
                <Navbar/>
                <section id="contacts" className="hero bg-cover bg-center py-16">
                    <div className="container mx-auto text-left mt-16 mb-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">CONTACT US</h1>
                        <p className="text-xl text-white mb-8">Experience the best car washing service in town</p>
                    </div>
                </section>

                <section className="container mx-auto p-6">
                    <div className="w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Visit Our Location</h3>
                                <p className="text-gray-600 mb-4">123 Main Street, Nairobi, Kenya</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                                <p className="text-gray-600 mb-4">Phone: 2547xxxxxxx</p>
                                <p className="text-gray-600 mb-4">Email: info@example.com</p>
                            </div>
                        </div>
                        <form className="mt-8">
                            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Name</label>
                                <input type="text" id="name" className="border border-gray-300 rounded px-4 py-2 w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <input type="email" id="email" className="border border-gray-300 rounded px-4 py-2 w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700">Message</label>
                                <textarea id="message" className="border border-gray-300 rounded px-4 py-2 w-full" />
                            </div>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send Message</button>
                        </form>
                    </div>
                </section>

                <Footer/>
            </main>
        </>
    )
}