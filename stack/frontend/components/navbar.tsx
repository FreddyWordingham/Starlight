import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Socials from "./Socials";

const Navbar = () => {
    const [nav, setNav] = React.useState(false);
    const [shadow, setShadow] = React.useState(false);
    const [navBg, setNavBg] = React.useState("#ecf0f3");
    const [linkCol, setLinkCol] = React.useState("#1f2937");
    const router = useRouter();

    React.useEffect(() => {
        if (router.asPath === "/antler" || router.asPath === "/arctk" || router.asPath === "/mockingbird" || router.asPath === "/twinlab") {
            setNavBg("transparent");
            setLinkCol("#ecf0f3");
        } else {
            setNavBg("#ecf0f3");
            setLinkCol("#1f2937");
        }
    }, [router.asPath]);

    const toggleNav = () => {
        setNav(!nav);
    };

    React.useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={shadow ? "fixed w-full h-20 shadow-xl ease-in duration-300" : "fixed w-full h-20 shadow-xs ease-in duration-300"}
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/#">
                    <Image src="/assets/logo/square.svg" alt="navbar logo" width="82" height="40" />
                </Link>
                <div>
                    <ul style={{ color: `${linkCol}` }} className="hidden md:flex uppercase">
                        <Link href="/#home">
                            <li className="ml-10 text-sm">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm">Contact</li>
                        </Link>
                    </ul>
                    <div onClick={toggleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300" : ""}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 " : "fixed left-[-100%] top-0 p-10 "}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src="/assets/logo/circle.svg" alt="logo" width="87" height="35" />
                            <div onClick={toggleNav} className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p
                                className="w-[85%] md:w-[90%] py-4 text-2xl font-semibold bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text
            "
                            >
                                Freddy Wordingham
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul className="uppercase">
                            <Link href="/#home">
                                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">Let&rsquo;s connect</p>
                            <Socials size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
