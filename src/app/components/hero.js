"use client";
import { useState, useRef, useEffect } from "react";

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

                    <p className='upper'>Hello,<a href="/#">I'm</a></p>

                    <h1>Muhammad Iqbal</h1>

                    <h2>Front End Developer</h2>

                    <p className='lower'>With knowledge in web development and design, I after <br/> the best project resulting in quality work.</p>
                    <a href='/#' className='btn1'>Let's Talk</a>

                </div>

            </div>

        </div>

    </section> 
    )
}