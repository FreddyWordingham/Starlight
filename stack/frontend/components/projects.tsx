import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <span className="uppercase text-xl tracking-widest font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                    Projects
                </span>
                <h2 className="py-4">Things I&lsquo;ve built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem title="Placeholder: Crypto" backgroundImg={"/assets/projects/crypto.jpg"} projectUrl="/crypto" />
                    <ProjectItem title="Placeholder: Netflix" backgroundImg={"/assets/projects/netflix.jpg"} projectUrl="/crypto" />
                    <ProjectItem title="Placeholder: Property" backgroundImg={"/assets/projects/property.jpg"} projectUrl="/crypto" />
                    <ProjectItem title="Placeholder: Twitch" backgroundImg={"/assets/projects/twitch.jpg"} projectUrl="/crypto" />
                </div>
            </div>
        </div>
    );
};

const ProjectItem = ({ title, backgroundImg, projectUrl }: { title: string; backgroundImg: string; projectUrl: string }) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className="rounded-xl group-hover:opacity-20" src={backgroundImg} alt="Crypto" width={512} height={256} />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                <p className="pb-4 pt-2 text-white text-center">React JS</p>
                <Link href={projectUrl}>
                    <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More info</p>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
