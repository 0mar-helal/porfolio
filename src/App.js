import About from "./Sections/About";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Sections/Home";
import Contact from "./Sections/Contact";
import Projects from "./Sections/Projects";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { createContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import PreLoader from "./Components/PreLoader/PreLoader";
import { fetchSectionData } from "./utils/constants";
import { useQuery } from "@tanstack/react-query";
export const DataContext = createContext();

function App() {
  const queryKeys = ["info", "about", "skills", "projects", "contact"];
  const queries = queryKeys.map((key) => ({
    queryKey: [key],
    queryFn: () => fetchSectionData(key),
  }));
  const {
    data: infoData,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useQuery(queries[0]);

  const {
    data: aboutData,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery(queries[1]);

  const {
    data: skillsData,
    isLoading: isLoading3,
    isError: isError3,
    error: error3,
  } = useQuery(queries[2]);

  const {
    data: projectsData,
    isLoading: isLoading4,
    isError: isError4,
    error: error4,
  } = useQuery(queries[3]);

  const {
    data: contactData,
    isLoading: isLoading5,
    isError: isError5,
    error: error5,
  } = useQuery(queries[4]);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  if (isError1 || isError2 || isError3 || isError4 || isError5) {
    return (
      <p>
        Error:{" "}
        {error1?.message ||
          error2?.message ||
          error3?.message ||
          error4?.message ||
          error5?.message}
      </p>
    );
  }
  if (isLoading1 || isLoading2 || isLoading3 || isLoading4 || isLoading5) {
    document.body.classList.add("no-scroll");
    return <PreLoader />;
  } else {
    document.body.classList.remove("no-scroll");
    return (
      <DataContext.Provider
        value={{
          infoData,
          aboutData,
          projectsData,
          skillsData,
          contactData,
        }}
      >
        <div className="App">
          <ToastContainer />
          <NavBar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </DataContext.Provider>
    );
  }
}

export default App;
