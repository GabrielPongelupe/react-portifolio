import { RiReactjsLine } from "react-icons/ri"
import { FaJava, FaNodeJs  } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { SiMysql  } from "react-icons/si"; // Ícone do MySQL
import { SiSpring } from "react-icons/si";
import { SiPython, SiSwagger  } from "react-icons/si";

import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import { animate, motion } from "framer-motion";
import Skills from "../common/Skills";


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [100, -100],
        transition:{
            diration: duration,
            ease: "Linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Technologies = () => {


    const {portuguese, toggleLanguage} = useContext(LanguageContext)


  return (
    <div className="border-b border-neutral-800 pb-24">
        {portuguese ? 
            <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial= {{y: -100, opacity: 0}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">Minhas
                <span className="text-green-400"> Tecnologias</span>
            </motion.h1> 
            :
            <motion.h1 
            whileInView={{opacity: 1, y: 0}}
            initial= {{y: -100, opacity: 0}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-green-400 text-4xl">
                Technologies
            </motion.h1> 
        }
        
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial= {{x: -200, opacity: 0}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

            <motion.div 
            initial={{y: -10}}
            animate= {{
                y: [100, -100],
                transition:{
                    duration: 2.5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }}

            className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="React.js">
                <RiReactjsLine className="text-7xl text-cyan-400 scale-101" />
            </motion.div>

            <motion.div 
            initial={{y: -10}}
            animate= {{
                y: [100, -100],
                transition:{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="Java">
                <FaJava className="text-7xl text-orange-500" />
            </motion.div>
            
            <motion.div 
            initial={{y: -10}}
            animate= {{
                y: [100, -100],
                transition:{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="JavaScript">
                <SiJavascript className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div 
            initial={{y: -10}}
            animate= {{
                y: [100, -100],
                transition:{
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="MySql">
                <SiMysql className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div 
            initial={{y: -10}}
            animate= {{
                y: [100, -100],
                transition:{
                    duration: 6,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="Spring Framework">
                <SiSpring className="text-7xl text-green-400" />
            </motion.div>
            <motion.div 
            initial={{y: -10}}
            animate= {{
                y: [100, -100],
                transition:{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="Python">
                <SiPython className="text-7xl text-sky-700" />
            </motion.div>
            <motion.div 
            initial={{y: -10}}
            animate= {{
                y: [100, -100],
                transition:{
                    duration: 2.5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="Node.js">
                <FaNodeJs className="text-7xl text-green-700 rounded-xl" />
            </motion.div>
            <motion.div 
            initial={{y: -10}}
            animate= {{
                y: [100, -100],
                transition:{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="Node.js">
                <SiSwagger className="text-7xl text-blue-950 bg-green-700 rounded-full" />
            </motion.div>
            <motion.div 
            initial={{y: -10}}
            animate= {{
                y: [100, -100],
                transition:{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110  " title="PostgreSQL">
                <BiLogoPostgresql className="text-7xl text-sky-700" />
                
            </motion.div>
             
        </motion.div>
        <Skills/>
    </div>
  )
}

export default Technologies