import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact.jsx"

import { LanguageProvider } from "./contexts/LanguageContext.jsx"
// bg-cyan-300
const App = () => {
  return (
    <LanguageProvider>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

        </div>
        
      </div>
      <div className="container mx-auto px-0">
          <Navbar/>
          <Hero/>
          
          <Projects/>
          <Technologies/>
          <Contact/>
         
      </div>
    </div>
    </LanguageProvider>
    
  )  
}

export default App
