
import Frontpage from './frontpage/frontpage'
import About from './about/about'
import Projects from './projects/projects'

// import { About } from './about'
// import { Projects } from './projects'
// import { Contact } from './contact'
function Frame() {
    return (
        <div className="h-screen text-black bg-[#F5F1E8] overflow-auto pt-16 md:pt-20">
            <div className="w-full">
                <section id="home" className="h-full"><Frontpage /></section>
                <section id="about" className="h-full"><About /></section>
                <section id="projects" className="h-full"><Projects /></section>
            </div>
        </div>
    )
}
export default Frame