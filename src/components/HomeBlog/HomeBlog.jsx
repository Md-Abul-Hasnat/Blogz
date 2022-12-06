import "./HomeBlog.css";
import { useContext } from "react";
import { GlobalContext } from "../context/MainContext";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const HomeBlog = () => {
  const { blogs } = useContext(GlobalContext);

  function reduceText(text, length) {
    return text.slice(0, length);
  }

  return (
    <>
      {blogs.slice(0, 8).map((blog) => {
        const { title, imgUrl, cetagory, author, date, description, uniqueID } =
          blog;

        return (
          <Link
            to={`/blogDetail/${uniqueID}`}
            key={uuid()}
            className="blog-card"
          >
            <div className="top">
              <img src={imgUrl} alt="blog" />
              <p className="cetagory-name">{cetagory} </p>
            </div>
            <div className="bottom">
              <div className="info">
                <p> {author} </p>
                <p> {date} </p>
              </div>
              <h2 className="blog-title">{reduceText(title, 60)}...</h2>
              <p className="blog-text">{reduceText(description, 140)}...</p>
            </div>
          </Link>
        );
      })}
      <Link className="view-btn" to={"/allBlogs"}>
        View All Blogs
      </Link>
    </>
  );
};

export default HomeBlog;
