import Frame from "./frame";
import Header from "./headerfooter/header";
import Footer from "./headerfooter/footer";
import Feuer from "./feuer/feuer";
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import "../index.css"
function Main() {
  return (
    <>
      <Feuer>
        <Header />
        <Frame />
        <Footer />
      </Feuer>
      
    </>
    
  );
}
export default Main;