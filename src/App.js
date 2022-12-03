import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Create from "./pages/Create/Create";
import Auth from "./pages/Auth/Auth";
import MainContext from "./components/context/MainContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <MainContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </MainContext>
    </BrowserRouter>
  );
}

export default App;

// template : https://themeger.shop/wordpress/katen/personal/
