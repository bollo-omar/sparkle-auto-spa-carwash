"use client"
import Image from 'next/image'
import {Navbar} from "@/components/Navbar";
import Carousel from "@/components/Slider";
import imgUrl1 from '../assets/images/carousel/carousel-1.jpg'
import imgUrl2 from '../assets/images/carousel/carousel-1.jpg'
import imgUrl3 from '../assets/images/carousel/carousel-1.jpg'
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";

export default function Home() {
    const images = [imgUrl1, imgUrl2, imgUrl3];
    return (
        <>
            <main className="bg-gray-100">
                <Navbar/>
                <section className="w-full">
                    <Slider/>
                </section>

                <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
                    <h1 className="text-2xl font-extrabold ">We offer best services to our customer</h1>
                </div>

                <section className="container mx-auto">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-1/3 p-4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold mb-4">Basic</h2>
                                <ul className="list-disc text-gray-600 mb-6 p-6">
                                    <li>Exterior wash and dry</li>
                                </ul>
                                <p className="text-2xl font-semibold mb-6">KES 300/=</p>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Book Now</button>
                            </div>
                        </div>
                        <div className="w-1/3 p-4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold mb-4">Standard</h2>
                                <ul className="list-disc text-gray-600 p-6 mb-6">
                                    <li>Exterior wash, dry</li>
                                    <li>Interior vacuuming</li>
                                </ul>
                                <p className="text-2xl font-semibold mb-6">KES 500/=</p>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Book Now</button>
                            </div>
                        </div>
                        <div className="w-1/3 p-4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold mb-4">Premium</h2>
                                <ul className="list-disc text-gray-600 mb-6 p-6">
                                    <li>Exterior wash, dry</li>
                                    <li>Interior vacuuming</li>
                                    <li>Detailing</li>
                                </ul>
                                <p className="text-2xl font-semibold mb-6">KES 1200/=</p>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Book Now</button>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="bg-white w-full ">
                    <div className="container mx-auto p-6 mb-4">
                        <h2 className="text-3xl font-bold mb-4">Why Take Our Services?</h2>
                        <p className="text-lg text-gray-600">
                            At Sparkle Auto Spa, we strive to provide the best car washing experience for our customers.<br/>
                            Here are a few reasons why you should choose our services:
                        </p>
                        <ul className="list-disc text-gray-600 mt-4 ml-8">
                            <li>High-quality cleaning using premium products</li>
                            <li>Professional and skilled staff members</li>
                            <li>Efficient and timely service</li>
                            <li>Environmentally friendly practices</li>
                            <li>Convenient and flexible scheduling options</li>
                        </ul>
                    </div>
                </section>


            </main>
            <Footer/>
        </>
    )
}
