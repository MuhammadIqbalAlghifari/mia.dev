"use client";
import { useState, useRef, useEffect } from "react";


export default function Contact() {

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
            el.classList.add('slide-contact');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi").forEach((el) => {
              el.classList.remove("slide-contact");
            });
        }
      }, [isIntersecting]);

return (

    <section className="contact">

        <div className="backround-contact" id="Contact">

            <div className="wrapper" ref={ref}>

                <h3 className="tersembunyi">Get In Touch</h3>

                <h2 className="tersembunyi">Contact Me</h2>

                <form action="https://formspree.io/f/xpzgqbrw" method="POST" id="contact-form">

                    <div className="input tersembunyi">

                        <div className="left tersembunyi">

                            <input type="name" name="name" className="name" placeholder="Enter your name"/>

                        </div>
                        
                        <div className="right tersembunyi">

                            <input type="email" name="email" className="email" placeholder="Enter your email"/>

                        </div>

                    </div>

                    
                    <div className="message tersembunyi">

                        <textarea name="message" cols="30" rows="10" className="message-down" placeholder="Enter your message"></textarea>

                        <a className="btn4"><button id="Submit" type="submit">Send Message</button></a> 

                    </div>

                </form>

            </div>

        </div>

    </section>
    )
}