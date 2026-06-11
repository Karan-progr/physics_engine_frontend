import { useEffect, useRef } from "react";
import "./Hero.css"
import HeroVideo from "./HeroVideo.mp4"

function Hero () {

    const cardRef = useRef(null);
    
    useEffect ( ()=> {
        const obeserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting){
                const HtmlCollection = entry.target.childNodes;
                console.log (typeof HtmlCollection);
                const array = Array.from(HtmlCollection);
                console.log (typeof array);
                
                array.forEach((child, index) => {
                    setTimeout(()=>{
                        child.classList.add("bloomUp")
                    }, index*100);
                })
            }
        })

        obeserver.observe(cardRef.current);
    }, []

    );

    return (
        <div className="Hero">
            <h2 className="HeroQuote">Don't Memorize, <br /> Just Visualize
                    <br />    <button className="signUp heroBtn">Signup</button>
                        <button className="tryNow heroBtn">Try Now</button>
            </h2>

            <video autoPlay muted loop src= { HeroVideo } >Video not playable</video>
            <ul className="Overview">
                <li><h2>Real World Enviroinment</h2></li>
                <li><h2>Visualize Newton Laws</h2></li>
                <li><h2>Do Conceptual Learning</h2></li>
            </ul>
            <h1 className="andMore" ref={cardRef}>
                <span>A</span>
                <span>n</span>
                <span>d</span>
                <span> </span>
                <span>M</span>
                <span>o</span>
                <span>r</span>
                <span>e</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </h1>
        </div>
    );
}

export default Hero;