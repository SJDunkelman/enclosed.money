import React, {useEffect} from "react";
import lottie from 'lottie-web';
import HeroAnimationData from "../data/hero-envelope.json";

 export default function HeroAnimation(){
    let animationContainer = React.createRef();

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: HeroAnimationData,
            renderer: 'svg',
            loop: true,
            autoplay: true,
          });
    }, [])

    return (
        <div className="h-48 w-full" ref={animationContainer}></div>
    )
}