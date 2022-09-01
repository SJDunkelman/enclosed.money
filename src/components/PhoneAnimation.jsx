import React, {useEffect} from "react";
import lottie from 'lottie-web';
import HeroAnimationData from "../data/phone.json";

 export default function PhoneAnimation(){
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
        <div className="h-48 w-48" ref={animationContainer}></div>
    )
}