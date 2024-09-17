import { RiReactjsLine } from "react-icons/ri"
import { FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { SiMysql  } from "react-icons/si"; // Ícone do MySQL
import { SiSpring } from "react-icons/si";
import { SiPython } from "react-icons/si";

import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";





const Technologies = () => {


    const {portuguese, toggleLanguage} = useContext(LanguageContext)


  return (
    <div className="border-b border-neutral-800 pb-24">
        {portuguese ? 
            <h1 className="my-20 text-center text-4xl">Minhas
                <span className="text-green-400"> Tecnologias</span>
            </h1> 
            :
            <h1 className="my-20 text-center text-green-400 text-4xl">
                Technologies
            </h1> 
        }
        
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="React.js">
                <RiReactjsLine className="text-7xl text-cyan-400 scale-101" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="Java">
                <FaJava className="text-7xl text-orange-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="Postgresql">
                <BiLogoPostgresql className="text-7xl text-sky-700" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="JavaScript">
                <SiJavascript className="text-7xl text-yellow-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="MySql">
                <SiMysql className="text-7xl text-blue-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="Spring Framework">
                <SiSpring className="text-7xl text-green-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 " title="Python">
                <SiPython className="text-7xl text-sky-700" />
            </div>
            
            
        </div>
    </div>
  )
}

export default Technologies