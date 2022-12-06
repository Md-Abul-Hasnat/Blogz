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

const Home = () => {
  const { blogs, loading } = useContext(GlobalContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="home">
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

            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {blogs.slice(0, 8).map((blog) => {
            const { title, imgUrl, cetagory, author, date, uniqueID } = blog;
            return (
              <SwiperSlide key={uuid()} className="SwiperSlide">
                <div className="image">
                  <img src={imgUrl} alt="Image" />
                  <div className="overlay"></div>
                </div>
                <div className="swiper-blog-details">
                  <p>{cetagory}</p>
                  <h1>{title.slice(0, 45)}...</h1>
                  <Link to={`/blogDetail/${uniqueID}`}>Read more</Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="main-section">
        <h1>Latest Blogs :</h1>
        <div className="main-section-wrapper">
          <div className="blog-section">
            <HomeBlog />
          </div>
          <div className="home-right">
            <HomeRightPart />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
