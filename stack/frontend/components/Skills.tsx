import Image from "next/image";
import React from "react";

const Skills = () => {
    return (
        <div className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <span className="uppercase text-xl tracking-widest font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                    Skills
                </span>
                <h2 className="py-4">What I can do</h2>
                <p>Technologies I frequently use in production environments</p>
                <div className="py-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/aws.png" alt="AWS" width={64} height={64} />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>AWS Serverless</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/react.png" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/tailwind.png" alt="TailwindCSS" width={64} height={64} />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TailwindCSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/mongo.png" alt="MongoDB" width={64} height={64} />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/github.png" alt="Git" width={64} height={64} />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Git</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/rust.png" alt="Rust" width={64} height={64} />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Rust</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/fastapi.svg" alt="FastAPI" width={64} height={64} />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>FastAPI</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/cpp.svg" alt="C++" width={64} height={64} />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>C++</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
