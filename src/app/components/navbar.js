"use client";
import { useState, useRef, useEffect } from "react";
import NavMobile from "./nav-mobile";

export default function Navbar() {

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
      });
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll('.nav-animation').forEach((el) => {
            el.classList.add('drop-down');
          });
        }
      });

    return (
        <section className='header'  >

        <header>

            <div className='backround-nav' ref={ref}>
                

                <div className='wrapper nav-animation'>

                    <div className='navbar'>

                        <div className='logo'>Port<a href="/#">folio</a></div>

                        <ul>

                            <li>

                                <a href='#Home'>Home</a>

                            </li>

                            <li>

                                <a href='#About'>About Me</a>

                            </li>

                            <li>

                                <a href='#Service'>Service</a>

                            </li>

                            
                            <li>
                                
                                <a href='#Project'>Project</a>

                            </li>

                            <li>

                                <a href='#Contact'>Contact</a>

                            </li>

                        </ul>

                    </div>

                    <NavMobile />

                </div>

            </div>

        </header>

    </section>
    )
}