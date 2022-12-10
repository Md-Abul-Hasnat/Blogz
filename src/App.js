import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./components/context/MainContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <MainContext>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <ToastContainer autoClose={1000} />
        </MainContext>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
