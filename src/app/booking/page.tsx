import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";
import userService, {userSignup} from "@/services/user.service";
import {createOrder} from "@/services/order.service";

export default async function BookingPage() {

    return (
        <>
            <main className="bg-gray-100">
                <Navbar/>
                <section id="about" className="hero bg-cover bg-center py-16 mb-4">
                    <div className="container mx-auto text-left mt-16 mb-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Booking</h1>
                        <p className="text-xl text-white mb-8">Experience the best car washing service in town</p>
                    </div>
                </section>
                <section className="w-1/2 container mx-auto mb-4">
                    <form className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Schedule your session with us</h3>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input type="text" id="name" name="name" className="border border-gray-300 rounded px-4 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="border border-gray-300 rounded px-4 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobile" className="block text-gray-700">Mobile</label>
                            <input type="tel" id="mobile" name="mobile" className="border border-gray-300 rounded px-4 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message"  className="block text-gray-700">Choose Service</label>
                            <select id="message" name="narration"  className="border border-gray-300 rounded px-4 py-2 w-full" >
                                <optgroup label="Sercice Type">
                                    <option value="Exterior Detail">Exterior Detail</option>
                                    <option value="Interior Detail">Interior Detail</option>
                                    <option value="Full Detail">Full Detail</option>
                                </optgroup>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="amount" className="block text-gray-700">Amount</label>
                            <input disabled={true} type="text" id="email" className="border bg-dark border-gray-300 rounded px-4 py-2 w-full" />
                        </div>

                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Book</button>
                    </form>
                </section>
                <Footer/>
            </main>
        </>
    )
}