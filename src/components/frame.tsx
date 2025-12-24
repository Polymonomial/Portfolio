import  Header  from './headerfooter/header'
import { Routes,Route } from 'react-router-dom'
import Frontpage from './frontpage/frontpage'

// import { About } from './about'
// import { Projects } from './projects'
// import { Contact } from './contact'
function Frame() {
    return (
        <div className="h-screen text-neutral-50 bg-white overflow-auto">
            <div className="w-full h-full">
                <Routes>
                    {/* <Route path="/games/:id" element={<Game/>}/>
                    <Route path="/games" element={<Games/>}/>
                    <Route name="home" path="/home" element={<Home/>}/>
                    <Route path="/intro" element={<Intro/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/*" element={<Game/>}/> */
                }
                    <Route path="/*" element={<Frontpage/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default Frame