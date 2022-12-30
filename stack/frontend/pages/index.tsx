import Head from "next/head";

import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Upwards from "../components/Upwards";

export default function Home() {
    return (
        <>
            <Head>
                <title>Freddy | Software Projects </title>
                <meta name="description" content="Software experiments" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon_circ.ico" />
            </Head>
            <Main />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Upwards />
        </>
    );
}
