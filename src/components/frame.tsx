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
                    <Route path="/*" element={<Frontpage/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default Frame