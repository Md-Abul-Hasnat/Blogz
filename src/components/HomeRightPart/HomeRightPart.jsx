import "./HomeRightPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { GlobalContext } from "../context/MainContext";
import { Link } from "react-router-dom";

const HomeRightPart = () => {
  const cetagories = [
    "Education",
    "Programming",
    "Religion",
    "Gaming",
    "Politics",
    "Sports",
    "Nature",
  ];

  const { blogs } = useContext(GlobalContext);

  const popularBlogs = blogs.filter(
    (blog) =>
      blog.cetagory === "Religion" ||
      blog.cetagory === "Programming" ||
      blog.cetagory === "Nature"
  );

  return (
    <div className="right-section">
      <div className="about-blogz">
        <h1>BLOGZ</h1>
        <p>
          Hello, We’re content writer who is fascinated by content fashion,
          celebrity and lifestyle. We helps clients bring the right content to
          the right people.
        </p>
        <div className="social-icons">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
        </div>
      </div>

      <div className="explore-topics">
        <h1>Explore Topics</h1>
        <ul>
          {cetagories.map((cetagory, i) => {
            return (
              <Link key={i} to={`/cetagory/${cetagory}`}>
                <small>{cetagory}</small>
                <small>
                  {blogs.filter((blog) => blog.cetagory === cetagory).length}
                </small>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="popular-posts">
        <h1>Popular Blogs</h1>
        {popularBlogs.slice(0, 5).map((blog, i) => {
          const { title, imgUrl, date, uniqueID } = blog;
          return (
            <Link to={`/blogDetail/${uniqueID}`} key={i}>
              <img src={imgUrl} alt="Popular blog" />
              <div className="detail">
                <h4>{title} </h4>
                <p> {date} </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeRightPart;
