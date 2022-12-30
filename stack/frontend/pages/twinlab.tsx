import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Twinlab = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80">
                    <Image className="absolute z-[-1]" layout="fill" objectFit="cover" src="/assets/projects/twinlab.jpg" alt="Property project" />
                    <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                        <h2 className="py-2">twinLab</h2>
                        <h3>AWS Serverless / Python / React JS / TailwindCSS</h3>
                    </div>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <span className="uppercase text-xl tracking-widest font-semibold bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                        twinLab
                    </span>
                    <h2>Overview</h2>
                    <p>This app was built using such and such...</p>
                    <p>We learnt that...</p>
                    <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                    <button className="px-8 py-2 mt-4">Code</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-2 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" />
                                AWS Serverless
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" />
                                React
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" />
                                Redux
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" />
                                TailwindCSS
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" />
                                FastAPI
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default Twinlab;
