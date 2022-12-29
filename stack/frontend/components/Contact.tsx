import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import React from "react";

const Contact = () => {
    return (
        <div className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <span className="uppercase text-xl tracking-widest font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                    Contact
                </span>
                <h2 className="py-4">Get in touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <Image
                                    className="rounded-xl hover:scale-105 ease-in duration-300"
                                    src="/assets/contact.jpg"
                                    alt="Contact"
                                    width={640}
                                    height={427}
                                />
                                <div>
                                    <h2 className="py-2">Freddy Wordingham</h2>
                                    <p>All things software</p>
                                    <p className="py-4">I am always interested in hearing new business opportunities. Contact me and let&lsquo;s chat.</p>
                                </div>
                            </div>
                            <div>
                                <p className="uppercase pt-8">Connect with me</p>
                            </div>
                            <div>
                                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaLinkedinIn size={30} />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaGithub size={30} />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <AiOutlineMail size={30} />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <BsFillPersonLinesFill size={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
