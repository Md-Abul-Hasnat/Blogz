import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Create from "../../pages/Create/Create";
import Auth from "../../pages/Auth/Auth";
import AllBlogs from "../../pages/AllBlogs/AllBlogs";
import BlogDetail from "../../pages/BlogDetail/BlogDetail";
import SpecificCetagory from "../../pages/SpecificCetagory/SpecificCetagory";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/allBlogs" element={<AllBlogs />} />
        <Route path="/blogDetail/:id" element={<BlogDetail />} />
        <Route path="/cetagory/:cetagoryName" element={<SpecificCetagory />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
