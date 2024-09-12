import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"

import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

const About = () => {

    const {portuguese, toggleLanguage} = useContext(LanguageContext)

  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">{portuguese ? "Sobre" : "About"} 
            <span className="text-green-400"> {portuguese ? "Mim" : "Me"}</span>
        </h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="Sobre Mim" />
                </div>
                
            </div>

            <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 text-xl">{portuguese ? ABOUT_TEXT.br : ABOUT_TEXT.eng}</p>
                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default About