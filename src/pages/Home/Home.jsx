import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import HomeRightPart from "../../components/HomeRightPart/HomeRightPart";

const Home = () => {
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
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-blog-details">
              <p>Politics</p>
              <h1>How to buy bulb on a tight budget</h1>
              <div className="blog-date">
                <small>author</small>
                <small>august 24,2022</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-blog-details">
              <h1>Test</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-blog-details">
              <h1>Test</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-blog-details">
              <h1>Test</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-blog-details">
              <h1>Test</h1>
            </div>
          </SwiperSlide>
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
    </section>
  );
};

export default Home;
