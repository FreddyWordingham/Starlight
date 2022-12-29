import Head from "next/head";

import Main from "../components/main";
import Navbar from "../components/navbar";

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
        </>
    );
}
