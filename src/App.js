import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Contact from "./components/Contact";
import About from "./components/About"

function App() {
  return (
      <Router>
           <Header/>

              <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="/Contact" element={<Contact/>}/>
              </Routes>
              
            <Footer/>
            {/* <Footer/>                 browser will display 2 footer  */}
          </Router> 

          
          
        
  )
}

export default App;       //exporting to index.js
