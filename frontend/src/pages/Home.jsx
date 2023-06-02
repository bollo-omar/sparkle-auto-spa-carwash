import {Layout} from "../common/Layout/Layout.jsx";
// import imgSRC from '../assets/images/andre-tan-pRppMPh4Zho-unsplash.jpg'
export const Home = () => {
    return (
        <>
            <Layout>
                <main className="container">
                    <section id="hero">
                        <div className="hero-content">
                            <h1>Welcome to My Landing Page</h1>
                            <p>A simple and effective landing page template</p>
                            <a href="#about" className="btn">Learn More</a>
                        </div>
                    </section>
                    <section id="about">
                        <div className="container">
                            <h2>About</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                                ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                                blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                                tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
                                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                                Donec sodales sagittis magna. Sed consequat,
                                leo eget bibendum sodales, augue velit cursus nunc,
                            </p>
                        </div>
                    </section>
                    <section id="services">
                        <div className="container">
                            <h2>Car Wash Services</h2>
                            <ul>
                                <li>
                                    <h3>Exterior Wash</h3>
                                    <p>Our professional team will thoroughly clean and wash the exterior of your
                                        vehicle, removing dirt, grime, and other contaminants. We use high-quality
                                        cleaning products that are safe for your car's paint.</p>
                                </li>
                                <li>
                                    <h3>Interior Detailing</h3>
                                    <p>Experience a fresh and clean interior with our interior detailing service. We'll
                                        vacuum and shampoo the seats and carpets, clean the dashboard and console, and
                                        treat any leather surfaces, leaving your car spotless and comfortable.</p>
                                </li>
                                <li>
                                    <h3>Wax and Polish</h3>
                                    <p>Give your car a shiny and protected finish with our wax and polish service. Our
                                        experts will apply a high-quality wax that not only enhances the appearance of
                                        your vehicle but also provides a protective layer against the elements.</p>
                                </li>
                                <li>
                                    <h3>Tire and Wheel Cleaning</h3>
                                    <p>Let us take care of your tires and wheels. Our team will thoroughly clean and
                                        shine your tires, remove brake dust, and restore the original luster of your
                                        wheels, giving your car a polished look.</p>
                                </li>
                                <li>
                                    <h3>Additional Services</h3>
                                    <p>In addition to our main services, we also offer paint protection, headlight
                                        restoration, and engine bay cleaning. Contact us for more information or to
                                        customize a service package to meet your specific needs.</p>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section id="contact">
                        <div className="container">
                            <h2>Contact</h2>
                            <form action="#" method="POST">
                                <input type="text" name="name" placeholder="Your Name"/>
                                <input type="email" name="email" placeholder="Your Email"/>
                                <textarea name="message" placeholder="Your Message"></textarea>
                                <button type="submit" className="btn">Send Message</button>
                            </form>
                        </div>
                    </section>
                    <footer>
                        <p>&copy; 2023 My Landing Page. All rights reserved.</p>
                    </footer>
                </main>
            </Layout>
        </>
    )
}