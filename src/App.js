import About from "./Sections/About";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Sections/Home";
import Contact from "./Sections/Contact";
import Projects from "./Sections/Projects";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import PreLoader from "./Components/PreLoader/PreLoader";
export const DataContext =createContext();

function App() {
  const [infoData, setInfoData] = useState(null);
  const [AboutData, setAboutData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);
  const [skillsData, setSkillsData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=> {
    infoData && AboutData && projectsData && skillsData && contactData && setIsLoading(false);
  },[infoData,AboutData,projectsData,skillsData,contactData])
  useEffect(()=> {
      Aos.init();
      Aos.refresh();
  },[])
  isLoading ?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll");
  return (
    <DataContext.Provider value={{infoData,setInfoData,AboutData,setAboutData,projectsData,setProjectsData,skillsData,setSkillsData,contactData,setContactData}}>
        <div className="App">
          {isLoading ? <PreLoader/>:null}
          <ToastContainer />
          <NavBar/>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
    </DataContext.Provider>

  );
}

export default App;
