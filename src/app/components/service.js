"use client";
import { useState, useRef, useEffect } from "react";

function ServiceCard() {

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
        <div className="card" ref={ref}>

                        <div className="left tersembunyi shadow-black shadow-2xl">

                            <img src="/card-icon-left.svg" className='inline-block mb-2' alt=""/>

                            <h2>Web Developer</h2>

                            <p>Development of custom web</p>
                            <p>pages. Using current technologies</p>
                            <p>and liblaries of the labor field.</p>

                        </div>

                        <div className="center tersembunyi shadow-black shadow-2xl">

                            <img src="/card-icon-center.svg" className='inline-block mb-2' alt=""/>

                            <h2>UI Designer</h2>

                            <p>I offer design of web interfaces and</p>
                            <p>mobile applications, design mode</p>
                            <p>in figma.</p>

                        </div>

                        <div className="right tersembunyi shadow-black shadow-2xl">

                            <img src="/card-icon-right.svg" className='inline-block mb-2' alt=""/>

                            <h2>Graphic Design</h2>

                            <p>I make designs at the client's</p>
                            <p>request, banner design, posters,</p>
                            <p>digital designs among others.</p>

                        </div>

                    </div>
    )
}


export default function Service() {

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
    <section className="service " id="Service">

        <div className="backround-service">

            <div className="wrapper" ref={ref}>
                    
                <p className="upper tersembunyi">My Service</p>

                <p className="lower tersembunyi">What Do I Do</p>

                    <ServiceCard/>


            </div>

        </div>

    </section>
    )
}