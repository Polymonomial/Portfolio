import  Header  from './header/header'
import { Routes,Route } from 'react-router-dom'

// import { About } from './about'
// import { Projects } from './projects'
// import { Contact } from './contact'
function Frame() {
    return (
        <div className="frame">
            <div>
                <Routes>
                    {/* <Route path="/games/:id" element={<Game/>}/>
                    <Route path="/games" element={<Games/>}/>
                    <Route name="home" path="/home" element={<Home/>}/>
                    <Route path="/intro" element={<Intro/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/*" element={<Home/>}/> */}
                </Routes>
            </div>
        </div>
    )
}
export default Frame