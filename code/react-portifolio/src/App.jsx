import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact.jsx"

import { LanguageProvider } from "./contexts/LanguageContext.jsx"

const App = () => {
  return (
    <LanguageProvider>
      <div className="overflow-x-hidden bg-[#eeecf3] font-sans text-neutral-600 antialiased selection:bg-emerald-300 selection:text-neutral-950">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#eeecf3] bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(16,185,129,0.08),rgba(238,236,243,0))]" />
        </div>
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Technologies />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App