import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from "react";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="max-w-[70%] m-auto text-grey-600">
                    <p className="uppercase text-sm tracking-widest">Welcome</p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&lsquo;m{" "}
                        <span className="font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                            Freddy
                        </span>
                    </h1>
                    <p>Let's create something</p>
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
    );
};

export default Main;