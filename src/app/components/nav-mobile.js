"use client";
import { useState } from "react";

export default function NavMobile() {

    const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state variable
    setIsActive(current => !current);
  };

  const myClass = 'active';

    return (
        <>
                    <nav className="mobile-nav">
                        <div className="logo" style={{display: "none"}}>Portfolio</div>
                        <div className={`menu-icon ${myClass}`}>
                            <img src="/Hamburger-menu-white.svg" onClick={handleClick} alt=""/>
                        </div>
                    </nav>

                    <div className={`mobile-menu-container ${isActive ? 'active menu-icon' : ''}`} onClick={handleClick}>
                        <div className="close-icon">
                            <img src="/close icon.svg" alt=""/>
                        </div>
                        <ul>

                            <li>
                                <a href="#Home">Home</a>
                            </li>

                            <li>
                                <a href="#About">About Me</a>
                            </li>

                            <li>
                                <a href="#Service">Service</a>
                            </li>

                            <li>
                                <a href="#Project">Project</a>
                            </li>

                            <li>
                                <a href="#Contact">Contact</a>
                            </li>
                            

                    </ul>
                    </div>
        </>
    )
}