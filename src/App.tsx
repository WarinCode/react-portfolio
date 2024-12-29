import { ReactElement, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AppContainer from "./components/containers/AppContainer";
// import Hero from "./components/Hero";
import Navbar from "./components/main/Navbar";
import About from "./components/main/About";
import Graduation from "./components/main/Graduation";
import Skills from "./components/main/Skills";
import AcademicResults from "./components/main/AcademicResults";
import Contact from "./components/main/Contact";
import Footer from "./components/main/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import UserModel from "./types/models/user";
import UserContext from "./components/contexts/UserContext";
import { fetchData } from "./utils";

const App = (): ReactElement => {
  const [user, setUser] = useState<UserModel | null>(null);
  const controller: AbortController = new AbortController();

  useEffect((): (() => void) => {
    fetchData<UserModel | null>("/user", setUser, controller);

    return (): void => {
      setUser(null);
      controller.abort();
    };
  }, []);

  if (user === null) {
    return (
      <AppContainer>
        <Loading />
      </AppContainer>
    );
  } 

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <AppContainer>
        <ToastContainer stacked />
        {/* <Hero/> */}
        <Navbar />
        <About />
        <Graduation />
        <Skills />
        <AcademicResults />
        <Contact />
        <Footer />
        <ScrollToTop />
      </AppContainer>
    </UserContext.Provider>
  );
};

export default App;
