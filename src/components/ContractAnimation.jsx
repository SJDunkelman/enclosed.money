import React, {useEffect} from "react";
import lottie from 'lottie-web';
import "../styles/global.css";
import ContractAnimationData from "../data/contract.json";
import TokenImg from "../images/token.svg";
import LetterImg from "../images/letter-closed.svg";

 export default function ContractAnimation(){
    let animationContainer = React.createRef();

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: ContractAnimationData,
            renderer: 'svg',
            loop: true,
            autoplay: true,
          });
    }, [])

    return (
        <div class="h-60 w-full flex items-center justify-between relative">
            <img src={TokenImg} alt="Token" className="move-left h-16 w-16" />
            <img src={LetterImg} alt="Token" className="move-right h-20 w-20" />
            <div className="h-60 w-48 absolute right-0 top-1/2 -translate-y-1/2" ref={animationContainer}></div>
        </div>
    )
}