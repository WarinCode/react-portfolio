import { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import AppContainer from "./components/containers/AppContainer";
import Navbar from "./components/main/Navbar";
import About from "./components/main/About";
import Education from "./components/main/Education";
import Skills from "./components/main/Skills";
import AcademicResults from "./components/main/AcademicResults";
import Contact from "./components/main/Contact";
import Footer from "./components/main/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import UserModel from "./types/models/user";
import UserContext from "./components/contexts/UserContext";
import useFetch from "./hooks/useFetch";
import useAuth from "./hooks/useAuth";
import { getApiUrl } from "./utils";
import { BearerToken } from "./constants";

const App = (): ReactElement => {
  const { token, isError } = useAuth();
  BearerToken.data = token;
  const apiUrl: string = getApiUrl() + "/user";
  const [user, setUser] = useFetch<UserModel>(apiUrl);

  if (user === null || isError) {
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
        <Education />
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
