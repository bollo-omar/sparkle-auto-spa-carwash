import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {

    return (
        <>
            <main className="bg-gray-100">
                <Navbar/>
                <section id="about" className="hero bg-cover bg-center py-16">
                    <div className="container mx-auto text-left mt-16 mb-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">ABOUT</h1>
                        <p className="text-xl text-white mb-8">Experience the best car washing service in town</p>
                    </div>
                </section>

                <section className="container mx-auto py-16 px-4 relative">
                    <div className="container mx-auto flex z-0">
                        <div className="w-3/4 z-1 rounded-md">
                            <div id="about-pic-bg" className="h-full bg-cover bg-center"></div>
                        </div>
                        <div id="about-pic-text" className="w-1/2 bg-white absolute m-16 right-12 z-2 rounded-md p-6">
                            <div className="bg-white p-8 align-middle container mx-auto">
                                <h3 className="text-2xl font-bold mb-4 text-center">We have the latest equipment</h3>
                                <p className="text-gray-600 mb-4 text-justify">
                                    "We pride ourselves on providing top-quality car wash services with the latest and
                                    most advanced equipment
                                    in the industry. Our commitment to excellence drives us to invest in
                                    state-of-the-art technology and machinery
                                    that ensures an exceptional cleaning experience for your vehicle. With our
                                    cutting-edge equipment,
                                    we deliver superior results while minimizing the impact on the environment. Rest
                                    assured,
                                    your car will receive the best care possible,
                                    thanks to our continuous efforts to stay ahead with the latest advancements in car
                                    washing technology."
                                </p>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">ABOUT US
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full container mx-auto p-6 mb-4">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold mb-8">Why Take Our Services?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-xl font-bold mb-4">Car Wash 100% Without Detergents</h3>
                                <p className="text-gray-600">
                                    Experience our revolutionary car wash service that is 100% detergent-free.
                                    We use innovative techniques and advanced technology to deliver a gentle
                                    yet effective cleaning without harming your vehicle or the environment.
                                    With our eco-friendly approach, your car will shine brilliantly while minimizing the
                                    impact on nature.
                                    Join us in our commitment to a sustainable and pristine clean.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-xl font-bold mb-4">Efficient Surface Drying Machines</h3>
                                <p className="text-gray-600">
                                    Experience efficient surface drying with our advanced machines.
                                    Say goodbye to water droplets and enjoy a flawless finish. Quick, thorough,
                                    and impeccable results guaranteed.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-xl font-bold mb-4">We Have An Application</h3>
                                <p className="text-gray-600">
                                    Stay connected with our convenient mobile application. With our user-friendly app,
                                    you can easily schedule appointments, track your car wash history, and access
                                    exclusive offers.
                                    Experience the convenience and control at your fingertips with our dedicated
                                    application.
                                    Download it today and unlock a seamless car wash experience
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-xl font-bold mb-4">Safe Lacquer Protection</h3>
                                <p className="text-gray-600">
                                    Ensure safe lacquer protection for your vehicle.
                                    Our specialized methods and products provide a layer of defense that safeguards your
                                    car's paintwork from scratches, UV rays,
                                    and other environmental factors. With our commitment to preserving your vehicle's
                                    pristine appearance,
                                    our lacquer protection keeps your car looking its best while providing long-lasting
                                    durability.
                                    Trust us to keep your vehicle protected and looking stunning.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </main>


        </>
    )
}