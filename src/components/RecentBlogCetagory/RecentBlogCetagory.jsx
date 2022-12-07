import { useContext } from "react";
import { GlobalContext } from "../context/MainContext";
import "./RecentBlogCetagory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RecentBlogCetagory = () => {
  const { blogs } = useContext(GlobalContext);

  const sportsBlogs = blogs.filter((blog) => blog.cetagory === "Sports");
  const politicsBlogs = blogs.filter((blog) => blog.cetagory === "Politics");
  const programmingBlogs = blogs.filter(
    (blog) => blog.cetagory === "Programming"
  );

  function reduceText(text, length) {
    return text.slice(0, length);
  }

  return (
    <>
      <div className="recent-blogs">
        <div className="heading">
          <div className="text">
            <h2> Sports</h2>
          </div>
        </div>
        <div className="blogs">
          {sportsBlogs.slice(0, 3).map((blog) => {
            const { imgUrl, title, date, uniqueID } = blog;
            return (
              <Link to={`/blogDetail/${uniqueID}`} key={uniqueID}>
                <img src={imgUrl} alt="blog" />
                <div className="right">
                  <h3>{reduceText(title, 45)}...</h3>
                  <small>
                    <FontAwesomeIcon className="icon" icon={faClock} /> {date}
                  </small>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="recent-blogs">
        <div className="heading">
          <div className="text">
            <h2>Politics</h2>
          </div>
        </div>
        <div className="blogs">
          {politicsBlogs.slice(0, 3).map((blog) => {
            const { imgUrl, title, date, uniqueID } = blog;
            return (
              <Link to={`/blogDetail/${uniqueID}`} key={uniqueID}>
                <img src={imgUrl} alt="blog" />
                <div className="right">
                  <h3>{reduceText(title, 45)}...</h3>
                  <small>
                    <FontAwesomeIcon className="icon" icon={faClock} /> {date}
                  </small>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="recent-blogs">
        <div className="heading">
          <div className="text">
            <h2>Programming</h2>
          </div>
        </div>
        <div className="blogs">
          {programmingBlogs.slice(0, 3).map((blog) => {
            const { imgUrl, title, date, uniqueID } = blog;
            return (
              <Link to={`/blogDetail/${uniqueID}`} key={uniqueID}>
                <img src={imgUrl} alt="blog" />
                <div className="right">
                  <h3>{reduceText(title, 45)}...</h3>
                  <small>
                    <FontAwesomeIcon className="icon" icon={faClock} /> {date}
                  </small>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentBlogCetagory;
