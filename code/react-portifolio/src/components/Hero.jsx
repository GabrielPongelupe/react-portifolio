import { HERO_CONTENT } from "../constants"
import { HERO_CONTENT_2023 } from "../constants";

import PongelupePic from "../assets/ReminiPicPongelupe.jpg"
import { useState } from "react"

import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

const Hero = () => {

    const {portuguese, toggleLanguage} = useContext(LanguageContext)


  return (
    <div className="m-4 border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap mb-5">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                        Gabriel Pongelupe
                    </h1>

                    

                    <span className="bg-gradient-to-r from-green-400 via-lime-400 to-yellow-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        {portuguese ? "Desenvolvedor FullStack" : "FullStack Developer"}
                    </span>
                    <p className="mt-2 mb-0 max-w-2xl text-xl pt-6 pb-0 font-light tracking-tighter">{portuguese ? HERO_CONTENT.br : HERO_CONTENT.eng}  </p>
                    <p className="my-0 max-w-2xl text-xl py-6 font-light tracking-tighter">{portuguese ? HERO_CONTENT_2023.br : HERO_CONTENT_2023.eng} </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={PongelupePic} className="rounded-2xl" alt="Gabriel Pongelupe" />
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Hero