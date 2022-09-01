import React from "react";


export default function IconOrbit(){
    return (
        <div class="w-128 h-96 relative">
            <div class="orbit-around absolute top-1/2 left-1 relative/2 w-4 h-4 dark:bg-white bg-black" style="animation-delay: -1s;" />
            <div class="orbit-around absolute top-1/2 left-1 relative/2 w-4 h-4 dark:bg-white bg-black" style="animation-delay: -2s;"/>
            <div class="orbit-around absolute top-1/2 left-1 relative/2 w-4 h-4 dark:bg-white bg-black" style="animation-delay: -3s;"/>
            <div class="orbit-around absolute top-1/2 left-1 relative/2 w-4 h-4 dark:bg-white bg-black" style="animation-delay: -4s;"/>
            <div class="orbit-around absolute top-1/2 left-1 relative/2 w-4 h-4 dark:bg-white bg-black" style="animation-delay: -5s;"/>
            <div class="orbit-around absolute top-1/2 left-1 relative/2 w-4 h-4 dark:bg-white bg-black" style="animation-delay: -6s;"/>
        </div>
    )
}