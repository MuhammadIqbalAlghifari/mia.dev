"use client";
import { useState, useRef, useEffect } from "react";


export default function AboutUpper(){

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

        <div className="backround-about-upper" id="About">

            <div className="wrapper"  ref={ref}>

                <div className="about-left-upper tersembunyi">

                    <img src="/computer-dynamic-color.svg" alt=""/>

                </div>

                <div className="about-right-upper tersembunyi">

                    <p className="upper">My Intro</p>

                    <h2>About Me</h2>

                    <p className="lower">Front-end developer, i create web pages with UI User <br/> Interface, I have experience and ready <br/> to develop the best design to keep clients happy.</p>

                    <a href="#Contact" className="btn2">Contact Me!</a>

                </div>

            </div>

        </div>
        
    )
}