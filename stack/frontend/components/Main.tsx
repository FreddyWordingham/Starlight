import React from "react";

import Socials from "./Socials";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="max-w-[70%] m-auto text-grey-600">
                    <p className="uppercase text-sm tracking-widest">Welcome</p>
                    <h1 className="py-4 text-gray-700">
                        Hi, Im{" "}
                        <span className="font-semibold bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                            Freddy
                        </span>
                    </h1>
                    <p>Let&lsquo;s create something</p>
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default Main;
