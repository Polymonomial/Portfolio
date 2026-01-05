import  Header  from './headerfooter/header'
import { Routes,Route } from 'react-router-dom'
import Frontpage from './frontpage/frontpage'
import About from './about/about'

// import { About } from './about'
// import { Projects } from './projects'
// import { Contact } from './contact'
function Frame() {
    return (
        <div className="h-screen h-screen text-black bg-[#F5F1E8] overflow-auto pt-16">
            <div className="w-full">
                <section id="home" className="h-full"><Frontpage /></section>
                <section id="about" className="h-full"><About /></section>
                <section id="projects"></section>
            </div>
        </div>
    )
}
export default Frame