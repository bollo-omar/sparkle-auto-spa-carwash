import {Navbar} from "../../components/Navbar";
import Footer from "../../components/Footer";



const Services = () => {
    const services = [
        {
            title: 'Exterior Detailing',
            description: 'Restore the shine and beauty of your vehicle\'s exterior with our comprehensive detailing service.',
            price: 'From KES 300/='
        },
        {
            title: 'Interior Cleaning',
            description: 'Revitalize the interior of your car with our meticulous cleaning and sanitization process.',
            price: 'From KES 600/='
        },
        {
            title: 'Full Package',
            description: 'Experience the ultimate car care with our complete package that includes both exterior detailing and interior cleaning.',
            price: 'From KES 1200/='
        }
    ];

    return (
        <>
        <main className="bg-gray-100">
            <Navbar/>

            <section id="services" className="hero bg-cover bg-center py-16">
                <div className="container mx-auto text-left mt-16 mb-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">SERVICES</h1>
                    <p className="text-xl text-white mb-8">Experience the best car washing service in town</p>
                </div>
            </section>

            <section className="w-full container mx-auto p-6 mb-4 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold">{service.price}</span>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Book
                                        Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </main>

    </>
    );
};

export default Services;

