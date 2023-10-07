"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Footer(){

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, [isIntersecting]);
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll('.tersembunyi').forEach((el) => {
            el.classList.add('slide-footer');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi").forEach((el) => {
              el.classList.remove("slide-footer");
            });
        }
      }, [isIntersecting]);

    return (
    <footer ref={ref}>

            <div className="backround-footer tersembunyi">

                <div className="wrapper">

                    <div className="footer-left">

                        <h1>MIA Dev</h1>

                        <p>Front end Developer</p>

                    </div>

                    <div className="footer-center">

                        <Link href="https://www.instagram.com/bfdev_/"><img src="/instagram_black.svg" alt="" className="instagram"/></Link>

                        <Link href="https://wa.me/6285795635990"><img src="/whatsapp.svg" alt="" className="youtube"/></Link>

                    </div>

                    <div className="footer-right">

                        <p>Copyright bfdev_ All rights reserved</p>

                    </div>

                </div>

            </div>

    </footer>
    )
}