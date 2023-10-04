"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function ProjectCard() {


    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-10px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, [isIntersecting]);
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll('.tersembunyi').forEach((el) => {
            el.classList.add('slide-card');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi").forEach((el) => {
              el.classList.remove("slide-card");
            });
        }
      }, [isIntersecting]);

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-5 text-white" ref={ref}>

                    <Link href='/musikku'>

                        <div className="my-1 px-1 w-full tersembunyi" id="card-1">

                            <article className="rounded-lg bg-neutral-800 shadow-black shadow-2xl">

                            <a href="/#">
                                <img alt="Placeholder" className="block h-auto w-full rounded-t-lg" src="/musikku.png"/>
                            

                            <header className="text-center p-2 ">
                                <h1 className="text-sm md:text-base lg:text-lg">
                                    <p>
                                        Musikku 
                                    </p>
                                </h1>
                                <h1 className="text-sm md:text-base lg:text-lg">
                                    <p style={{fontFamily: 'Futura Md'}}>
                                        (Personal Project) 
                                    </p>
                                </h1>
                            </header>

                            <footer className="p-2">
                                    <p className="m-2 text-center text-base text-white" style={{fontFamily: 'Futura Md'}}>
                                        My personal website design about music landing page like spotify. (Only Layout)
                                    </p>
                            </footer>
                            </a>

                        </article>

                        </div>

                    </Link>

                    <Link href='/admin-office'>

                        <div className="my-1 px-1 w-full tersembunyi" onClick={() => navigate('/admin-office')} id="card-2">

                        <article className="rounded-lg bg-neutral-800 shadow-black shadow-2xl">

                            <a href="/#">
                                <img alt="Placeholder" className="block h-auto w-full rounded-t-lg" src="/Admin Office Platinum.png"/>
                            

                            <header className="text-center p-2 ">
                                <h1 className="text-sm md:text-base lg:text-lg">
                                    <p >
                                    Admin Office - Platinum 
                                    </p>
                                </h1>
                                <h1 className="text-sm md:text-base lg:text-lg">
                                <p style={{fontFamily: 'Futura Md'}}>
                                    (Company Project)
                                </p>
                            </h1>
                            </header>

                            <footer className="p-2">
                                    <p className="m-2 text-center text-base text-white" style={{fontFamily: 'Futura Md'}}>
                                    This website was created by me to edit the assets on the platinum website
                                    </p>
                            </footer>
                        </a>

                        </article>

                        </div>

                    </Link>

                        <div className="my-1 px-1 w-full tersembunyi" id="card-3">

                        <article className="rounded-lg bg-neutral-800 shadow-black shadow-2xl">

                            <a href="https://platinum.co.id/">
                                <img alt="Placeholder" className="block h-auto w-full rounded-t-lg" src="/Platinum.png"/>
                            

                            <header className="text-center p-2 ">
                                <h1 className="text-sm md:text-base lg:text-lg">
                                    <p>
                                        Platinum (Only Animation)
                                    </p>
                                </h1>
                                <h1 className="text-sm md:text-base lg:text-lg">
                                <p style={{fontFamily: 'Futura Md'}}>
                                    (Company Project)
                                </p>
                            </h1>
                            </header>

                            <footer className="p-2">
                                    <p className="m-2 text-center text-base text-white" style={{fontFamily: 'Futura Md'}}>
                                    I was involved in making this website, namely making animations
                                    </p>
                            </footer>
                        </a>

                        </article>
                        </div>

                        <div className="my-1 px-1 w-full tersembunyi" id="card-4">

                            <article className="rounded-lg bg-neutral-800 shadow-black shadow-2xl">

                            <a href="https://anyer.itmgi.co/">
                                <img alt="Placeholder" className="block h-auto w-full rounded-t-lg" src="/anyer.png"/>
                            

                            <header className="text-center p-2 ">
                                <h1 className="text-sm md:text-base lg:text-lg">
                                    <p >
                                        Anyer (Only Animation)
                                    </p>
                                </h1>
                                <h1 className="text-sm md:text-base lg:text-lg">
                                    <p style={{fontFamily: 'Futura Md'}}>
                                    (Company Project)
                                    </p>
                                </h1>
                            </header>

                            <footer className="p-2">
                                    <p className="m-2 text-center text-base text-white" style={{fontFamily: 'Futura Md'}}>
                                        I was involved in making this website, namely making animations
                                    </p>
                            </footer>
                            </a>

                        </article>

                        </div>
            </div>
    )
}

export default function Project() {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-200px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, [isIntersecting]);
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll('.tersembunyi').forEach((el) => {
            el.classList.add('slide-title');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi").forEach((el) => {
              el.classList.remove("slide-title");
            });
        }
      }, [isIntersecting]);

    return (
        <section className="project">

        <div className="backround-project" id="Project">

            <div className="wrapper">
    
                <div className="mx-auto pt-12 px-4 pb-4 md:px-12 md:pb-2 lg:pb-3 xl:pb-6" ref={ref}>

                <p className="text-white text-center text-3xl mb-7 pt-10 tersembunyi" >My Jobs </p>
        
                <h1 className="text-white text-center text-4xl md:text-4xl lg:text-5xl mb-12 tersembunyi">Recent <a className="project" href="/#">Projects</a> </h1>
                    
                    <ProjectCard/>

                </div>
        
            </div>
        
        </div>

    </section>
    )
}