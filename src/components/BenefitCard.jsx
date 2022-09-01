import React from "react";
import useWindowDimensions from "./utils/useWindowDimensions";


export default function BenefitCard(props){
    const {width, height} = useWindowDimensions();
    var element;
    if (width > 768) {
        if (props.leftSide){
            element = <div class="flex flex-col md:flex-row py-8 items-center rounded-lg bg-off-white bg-opacity-5 px-4 font-extralight my-4">
            <div class="flex flex-col justify-center space-y-2 w-full md:w-2/3 text-center md:text-left">
                <h5 class="pb-4 text-3xl font-semibold">{props.title}</h5>
                <p>{props.desc}</p>
                <p class="text-gradient font-light">{props.benefit}</p>
            </div>
            <div class="flex items-center justify-center w-full md:w-1/3">
                <img src={props.img} alt="Cash" class="h-40 w-auto ml-4"/>
            </div>
        </div>;
        } else {
            element = <div class="flex flex-col md:flex-row py-8 items-center rounded-lg bg-off-white bg-opacity-5 px-4 font-extralight my-4">
                    <div class="flex items-center justify-center w-full md:w-1/3">
                        <img src={props.img} alt="Cash" class="h-40 w-auto mr-4"/>
                    </div>
                    <div class="flex flex-col justify-center space-y-2 pt-4 md:pt-0 w-full md:w-2/3 text-center md:text-right">
                        <h5 class="pb-4 text-3xl font-semibold">{props.title}</h5>
                        <p>{props.desc}</p>
                        <p class="text-gradient font-light">{props.benefit}</p>
                    </div>
                </div>;
        }
    } else {    // mobile
        element = <div class="flex flex-col md:flex-row py-8 items-center rounded-lg bg-off-white bg-opacity-5 px-4 font-extralight my-4">
            <div class="flex flex-col justify-center space-y-2 w-full md:w-2/3 text-center md:text-left">
                <h5 class="pb-4 text-3xl font-semibold">{props.title}</h5>
                <p>{props.desc}</p>
                <p class="text-gradient font-light">{props.benefit}</p>
            </div>
            <div class="flex items-center justify-center w-full md:w-1/3">
                <img src={props.img} alt="Cash" class="h-40 w-auto ml-4"/>
            </div>
        </div>;
    }
    
    return(
        element
    )
};