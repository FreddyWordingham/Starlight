import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import React from "react";

const Upwards = () => {
    return (
        <div className="flex justify-center py-12">
            <Link href="/">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp size={40} />
                </div>
            </Link>
        </div>
    );
};

export default Upwards;
