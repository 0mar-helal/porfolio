import About from "./Sections/About";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Sections/Home";
import Contact from "./Sections/Contact";
import Projects from "./Sections/Projects";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
// import PreLoader from "./Components/PreLoader/PreLoader";
function App() {
  // const [isLoading,setIsLoading] =useState(true);
  useEffect(()=> {
      Aos.init();
      Aos.refresh();
      // setIsLoading(false);
  },[])
  // isLoading ?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll");
  return (
    <div className="App">
      {/* {isLoading && <PreLoader/>} */}
      <ToastContainer />
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
