import { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import AppContainer from "./components/containers/AppContainer";
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
import useFetch from "./hooks/useFetch";
import { getApiUrl } from "./utils";

const App = (): ReactElement => {
  const apiUrl: string = getApiUrl() + "/user";
  const controller: AbortController = new AbortController();
  const [user, setUser] = useFetch<UserModel>(apiUrl, controller);

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
