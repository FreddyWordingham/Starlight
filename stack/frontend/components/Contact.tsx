import Image from "next/image";
import React from "react";

import Socials from "./Socials";

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <span className="uppercase text-xl tracking-widest font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                    Contact
                </span>
                <h2 className="py-4">Get in touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4">
                        <Description />
                    </div>
                    <div className="col-span-3 lg:col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Description = () => {
    return (
        <div className="lg:p-4 h-full">
            <div>
                <Image className="rounded-xl hover:scale-105 ease-in duration-300" src="/assets/contact.jpg" alt="Contact" width={640} height={427} />
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
                <Socials />
            </div>
        </div>
    );
};

const ContactForm = () => {
    return (
        <div className="p-4">
            <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Phone Number</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="11"></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">Send</button>
            </form>
        </div>
    );
};

export default Contact;
