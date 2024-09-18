import { HERO_CONTENT } from "../constants"
import { HERO_CONTENT_2023 } from "../constants";

import PongelupePic from "../assets/ReminiPicPongelupe.jpg"
import {motion} from "framer-motion"
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import DownloadButton from "./DownloadButton";

const Hero = () => {


    const container = (delay) => ({
        hidden: {x: -100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.5, delay: delay},
        }
    })

    const {portuguese, toggleLanguage} = useContext(LanguageContext)


  return (
    <div className="m-4 lg:mb-35">
        <div className="flex flex-wrap mb-5">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl lg:">
                        Gabriel Pongelupe
                    </motion.h1>

                    

                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-green-400 via-lime-400 to-yellow-500 bg-clip-text text-4xl tracking-tight text-transparent"
                    
                    >
                        {portuguese ? "Desenvolvedor FullStack" : "FullStack Developer"}
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="mt-2 mb-0 max-w-2xl text-xl pt-6 pb-0 font-light tracking-tighter">{portuguese ? HERO_CONTENT.br : HERO_CONTENT.eng}  </motion.p>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-0 max-w-2xl text-xl py-6 font-light tracking-tighter">{portuguese ? HERO_CONTENT_2023.br : HERO_CONTENT_2023.eng} </motion.p>
                    
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 1.2, duration: 1}} src={PongelupePic} className="rounded-2xl" alt="Gabriel Pongelupe" />
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Hero