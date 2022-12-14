import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import HomeRightPart from "../../components/HomeRightPart/HomeRightPart";
import { useContext } from "react";
import { GlobalContext } from "../../components/context/MainContext";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import RecentBlogCetagory from "../../components/RecentBlogCetagory/RecentBlogCetagory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Home = () => {
  const { blogs, loading } = useContext(GlobalContext);

  const swiperBlogs = blogs.filter(
    (blog) =>
      blog.cetagory === "Religion" ||
      blog.cetagory === "Politics" ||
      blog.cetagory === "Education" ||
      blog.cetagory === "Nature"
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <motion.section
      className="home"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="hero-swiper">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            800: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {swiperBlogs.slice(0, 8).map((blog) => {
            const { title, imgUrl, cetagory, uniqueID } = blog;
            return (
              <SwiperSlide key={uuid()} className="SwiperSlide">
                <div className="image">
                  <img src={imgUrl} alt="Image" />
                  <div className="overlay"></div>
                </div>
                <div className="swiper-blog-details">
                  <p>{cetagory}</p>
                  <h1>{title.slice(0, 45)}...</h1>
                  <Link to={`/blogDetail/${uniqueID}`}>
                    Read more
                    <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="main-section">
        <h1>Recent Blogs :</h1>
        <div className="main-section-wrapper">
          <div className="blog-section">
            <HomeBlog />
          </div>
          <div className="home-right">
            <HomeRightPart />
          </div>
        </div>
      </section>

      <section className="recent-blogs-cetegory">
        <h1>Popular Cetagories :</h1>
        <div className="recent-blogs-cetegory-wrapper">
          <RecentBlogCetagory />
        </div>
      </section>
    </motion.section>
  );
};

export default Home;
