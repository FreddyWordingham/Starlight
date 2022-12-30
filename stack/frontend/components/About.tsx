import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <span className="uppercase text-xl tracking-widest font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                        About
                    </span>
                    <p className="py-4">-- Mathematics is a science, programming is an art</p>
                    <div className="text-gray-600">
                        <p className="py-2">
                            What feels like a long time ago, I went to the University of Exeter to study Physics and Astrophysics. It was an easy choice. We are
                            all fascinated by the world around us, and I wanted to understand more deeply how we think it works.
                        </p>
                        <p className="py-2">
                            Mathematics is an unreasonably effective tool at modelling the world around us. We can use it to predict the future, to understand
                            the past without experiencing it directly. It looks beautiful and elegant in black and white script. Programming is equally alluring
                            in bright purposeful colours. Programming allows us to build mathematical models capable of simulating increasingly complex systems.
                        </p>
                        <p className="py-2">
                            Telescopes observe the heavens, however the only tool Astrophysicists have to experiment on the universe is code. During my Masters
                            I developed a piece of software which simulates how light propagates through a planetary atmosphere. Using this tool we can generate
                            synthetic light curves - changes in observed brightness as an exoplanet orbits its star. By matching these curves to observed data,
                            we can the determine the physical properties of exoplanets and their atmospheres. I fell in completely in love with programming. I
                            wanted to build things. I wanted to make things that people could use. I wanted to make things that people could enjoy.
                        </p>
                        <p className="py-2">
                            My PhD thesis describes transferring these techniques to the field of biophysics in an attempt to improve the treatment of
                            non-melanoma skin cancer using photodynamic therapy. This extended the numerical systems to include chemical reactions and
                            migrations, and the capability to accurately model the path of photons through the complex geometry of the human body. As our team
                            grew, students and researchers began to rely on my software to perform their experiments. And the motivation of collaboration
                            inspired me to revise and implement best practices in software engineering. I was hooked.
                        </p>
                        <p className="py-2">
                            Initially the code was written in C, but as the codebase grew the allure of C++&lsquo;s object orientation was too much to
                            withstand. However, MAKEFILEs and C++&lsquo;s lack of a package manager made it difficult to justify new developments on the
                            codebase, as I&lsquo;d spend more time getting it to build on everyone else&lsquo;s machines than I would on the physics engine.
                            Rust&lsquo;s design decisions and wonderful ecosystem enticed me to once again jump ship. The name Rust is fitting, as over time my
                            love of science had been replaced by a love of prototyping, building and refining; engineering. Solving the problem conceptually is
                            good, but building a system which executes it is better.
                        </p>
                        <p className="py-2">
                            After my PhD I worked at the University of Exeter as a Research Software Engineer. I was responsible for the delivery of software
                            projects ranging from microscope control applications to simulations used to develop AI that command aircraft in live airspace.
                            During my time as an RSE I introduced and encouraged the use of Python based web-applications and the ease of deployment afforded by
                            Docker and AWS&lsquo;s services.
                        </p>
                        <p className="py-2">
                            Currently, I lead a team of excellent, creative and compassionate individuals at{" "}
                            <a className="font-bold" href="https://digilab.co.uk">
                                digiLab
                            </a>
                            . Right now, we&lsquo;re building tools which make it simple to build and deploy probabilistic AI. We like to{" "}
                            <span className="italic">move fast, fail fast, learn fast</span>. I adore my job. It&lsquo;s important to me that my team does too.
                            I strongly believe we will deliver the best products under enthusiastic, knowledgeable leadership that is ready to explore new ideas
                            and listen carefully to feedback. I&lsquo;m excited to see what we&lsquo;ll build together.
                        </p>
                    </div>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300">
                    <Image src="/assets/about.jpg" alt="about page image" width="640" height="800" />
                </div>
            </div>
        </div>
    );
};

export default About;
