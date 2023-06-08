import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="w-full bg-gray-800 text-gray-300">
                <div className="conatiner mx-auto flex align-middle justify-evenly gap-4 py-8 px-5">
                    <div className="w-1/4">
                        <h4>Hello,</h4>
                        <ul>
                            <li>
                                <div>
                                    <p>
                                        Trust our expert team and state-of-the-art equipment to deliver a spotless shine
                                        every
                                        time. Book your appointment today!
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Navigation</h4>
                        <ul className="mt-4">
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contacts">Contact</Link></li>
                            <li><Link href="/services">Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Opening hours</h4>
                        <ul className="mt-4">
                            <li>Mon - Fri (6:00AM - 9:00PM)</li>
                            <li>Sat - Sun (8:00AM - 6:00PM)</li>
                            <li>Holidays (8:00AM - 6:00PM)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Contact</h4>
                        <ul className="mt-4">
                            <li><Link href="#">Mobile: 07XXXXXXXX</Link></li>
                            <li><Link href="/contacts">Email : johndoe@gmail.com</Link></li>
                            <li><Link href="/services">Nairobi, KE</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Join us on</h4>
                        <ul className="mt-4">
                            <li><Link href="/about">Twitter</Link></li>
                            <li><Link href="/contacts">Facebook</Link></li>
                            <li><Link href="/services">Intagram</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}