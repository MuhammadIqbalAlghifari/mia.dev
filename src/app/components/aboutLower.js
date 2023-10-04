"use client";
import { useState, useRef, useEffect } from "react";

export default function AboutLower() {

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

            <div className="backround-about-lower">

            <div className="wrapper" ref={ref}>

                <div className="about-left-lower tersembunyi">

                    <p className="upper">Favourite <a href="/#">Skills</a></p>

                    <h2>My Skills</h2>

                    <p className="lower">See fully what skills i have and perform, to <br/> develop the projects for you.</p>

                    <a href="/#" className="btn2">See Projects!</a>

                </div>


                <div className="about-right-lower tersembunyi">

                    <h2 className="upper">01. <a href="/#" style={{textDecoration: "none"}}>HTML&CSS</a></h2>

                    <h2>02. <a href="/#" style={{textDecoration: "none"}}>JavaScript</a></h2>

                    <h2>03. <a href="/#" style={{textDecoration: "none"}}>Bootstrap</a></h2>

                    <h2>04. <a href="/#" style={{textDecoration: "none"}}>Tailwind CSS</a></h2>

                </div>

                <div className="about-right-lower-right tersembunyi">

                    <h2 id="lima">05. <a href="/#" style={{textDecoration: "none"}}>Figma</a></h2>

                    <h2 id="enam">06. <a href="/#" style={{textDecoration: "none"}}>React.js</a></h2>

                    <h2 id="tujuh">07. <a href="/#" style={{textDecoration: "none"}}>Next.js</a></h2>

                </div>

            </div>

            </div>

    )
}