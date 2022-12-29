import Head from "next/head";

import About from "./about";
import Main from "./main";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Skills from "./skills";

export default function Home() {
    return (
        <>
            <Head>
                <title>Freddy | Software Projects </title>
                <meta name="description" content="Software experiments" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon_circ.ico" />
            </Head>
            <Navbar />
            <Main />
            <About />
            <Skills />
            <Projects />
        </>
    );
}
