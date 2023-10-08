"use client";
import { useState, useRef, useEffect } from "react";
import TypewriterComponent from "typewriter-effect";

export default function Hero() {

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
            el.classList.add('slide');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi").forEach((el) => {
              el.classList.remove("slide");
            });
        }
      }, [isIntersecting]);

    return (
        <section className='hero'>

        <div className='backround-hero' id='Home'>

            <div className='wrapper' ref={ref}>

                <div className='hero-left tersembunyi'>

                    <img src="/Portfolio Profile.png" alt=''/>

                </div>

                <div className='hero-right tersembunyi'>

                    <p className="upper"><TypewriterComponent options={{
                      strings: ["Hello,<text>I'm</text>"],
                      autoStart: true,
                      cursor: "",
                      pauseFor: 8640000000000000, 
                      delay: 50,
                      loop: true,
                      skipAddStyles: true,
                    }
                    }></TypewriterComponent></p>

                    <h1><TypewriterComponent options={{
                      strings: ["Muhammad Iqbal"],
                      autoStart: true,
                      cursor: "",
                      loop: true,
                      delay: 100,
                      pauseFor: 8640000000000000,
                      skipAddStyles: true,
                    }}></TypewriterComponent></h1>

                    <h2><TypewriterComponent options={{
                      strings: ["A React.js Developer", "A Next.js Developer", "A Front End Developer"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 20,
                      skipAddStyles: true,
                      cursor: "_",
                    }}/></h2>

                    <p className='lower'><TypewriterComponent options={{
                      strings: ['With knowledge in web development and design, I after <br/> the best project resulting in quality work.'],
                      skipAddStyles: true,
                      autoStart: true,
                      loop: true,
                      delay: 10,
                      pauseFor: 8640000000000000,
                      cursor: "",
                    }}></TypewriterComponent></p>
                    <a href='/#' className='btn1'>Let's Talk</a>

                </div>

            </div>

        </div>

    </section> 
    )
}