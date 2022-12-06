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
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SpecificCetagory from "./pages/SpecificCetagory/SpecificCetagory";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <MainContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/allBlogs" element={<AllBlogs />} />
            <Route path="/blogDetail/:id" element={<BlogDetail />} />
            <Route
              path="/cetagory/:cetagoryName"
              element={<SpecificCetagory />}
            />
          </Routes>
          <Footer />
          <ToastContainer autoClose={1000} />
        </MainContext>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

// template : https://themeger.shop/wordpress/katen/personal/
