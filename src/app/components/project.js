"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";


function ProjectCard() {

    const projectData = [
        {
            image: '/musikku.png',
            name: 'Musikku',
            project: '(Personal Project)',
            description: 'My personal website design about music landing page like spotify. (Under Development)',
            linkView: '/musikku',
            linkDemo: '#Project',
            linkGithub: '#Project',
        },
        {
            image: '/Admin Office Platinum.png',
            name: 'Admin Office - Platinum',
            project: '(Company Project)',
            description: 'This website was created by me to edit the assets on the platinum website. (Only Layout)',
            linkView: '/admin-office',
            linkDemo: 'https://muhammadiqbalalghifari.github.io/backofficeplatinum.co.io/page-sub-domain/backoffice-home.html',
            linkGithub: 'https://github.com/MuhammadIqbalAlghifari/backofficeplatinum.co.io',
        },
        {
            image: '/Platinum.png',
            name: 'Platinum (Only Animation)',
            project: '(Company Project)',
            description: 'I was involved in making this website, namely making animations',
            linkView: '/platinum',
            linkDemo: 'anyer.itmgi.co',
            linkGithub: 'https://github.com/MuhammadIqbalAlghifari/platinum.git.io',
        },
        {
            image: '/anyer.png',
            name: 'Anyer Wonderland (Only Animation)',
            project: '(Company Project)',
            description: 'I was involved in making this website, namely making animations',
            linkView: '/anyer',
            linkDemo: 'https://anyerwonderland.com',
            linkGithub: '#Project',
        },
        {
            image: '/Knockout Kings.png',
            name: 'Knockout Kings',
            project: '(Personal Project)',
            description: 'Personal project about Martial arts, included payment gateway, auth and simple online shop.',
            linkView: '/knockout-kings',
            linkDemo: 'https://knockoutkings.vercel.app',
            linkGithub: 'https://github.com/MuhammadIqbalAlghifari/knockoutkings',
        },
        {
            image: '/manchester united.png',
            name: 'Manchester United',
            project: '(Personal Project)',
            description: 'Knockout Kings clone about my favourite club Manchester United. Added some changes in UI',
            linkView: '/manchester-united',
            linkDemo: 'https://manchesterunited.vercel.app',
            linkGithub: 'https://github.com/MuhammadIqbalAlghifari/manchesterunited',
        },
    ]

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

            {projectData.map((project, index) => (

                <div className="my-1 px-1 w-full tersembunyi" id="card-1" key={index}>

                    <article className="rounded-lg bg-neutral-800 shadow-black shadow-2xl">

                        <img alt="Placeholder" className="block h-auto w-full rounded-t-lg" src={project.image}/>
                    

                    <header className="text-center p-2 ">
                        <h1 className="text-sm md:text-base lg:text-lg">
                            <p>
                                {project.name}
                            </p>
                        </h1>
                        <h1 className="text-sm md:text-base lg:text-lg">
                            <p style={{fontFamily: 'Futura Md'}}>
                                {project.project} 
                            </p>
                        </h1>
                    </header>

                    <footer className="p-2">
                            <p className="m-2 text-center text-base text-white" style={{fontFamily: 'Futura Md'}}>
                                {project.description}
                            </p>
                    </footer>

                    <footer className="p-2 flex justify-between items-center">

                        <Link href={project.linkDemo}>
                            <button className="bg-[#1c1c1c] p-2 rounded-md text-center md:gap-3 gap-2 text-base text-white flex justify-between items-center" style={{fontFamily: 'Futura Md'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="md:h-8 md:w-8 h-5 w-5">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>
                                Demo
                            </button>
                        </Link>

                        <Link href={project.linkView}>
                            <button className="bg-[#1c1c1c] p-2 rounded-md text-center md:gap-3 gap-2 text-base text-white flex justify-between items-center" style={{fontFamily: 'Futura Md'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="md:h-8 md:w-8 h-5 w-5">
                                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                </svg>
                                View
                            </button>
                        </Link>

                        <Link href={project.linkGithub}>
                            <button className="bg-[#1c1c1c] p-2 rounded-md text-center md:gap-3 gap-2 text-base text-white flex justify-between items-center" style={{fontFamily: 'Futura Md'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:w-8 h-5 w-5" fill="white" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Github
                            </button>
                        </Link>

                    </footer>

                </article>

                </div>

            ))}

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
        
                <h1 className="text-white text-center text-4xl md:text-4xl lg:text-5xl mb-12 tersembunyi">Latest <text className="project" style={{color: '#00da8e'}}>Projects</text> </h1>
                    
                    <ProjectCard/>

                </div>
        
            </div>
        
        </div>

    </section>
    )
}