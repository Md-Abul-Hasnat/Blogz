import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../components/context/MainContext";
import "./AllBlogs.css";
import img from "../../assets/img/blog.jpg";
import { useState } from "react";

const AllBlogs = () => {
  const { blogs } = useContext(GlobalContext);

  const [showBlog, setShowBlog] = useState(blogs.slice(0, 12));

  function reduceText(text, length) {
    return text.slice(0, length);
  }

  return (
    <section className="specific-cetagory">
      <div className="specific-cetagory-head">
        <img src={img} alt="background img" />
        <h1> All OUR BLOGS </h1>
        <div className="overlay"></div>
      </div>
      <div className="specific-cetagory-wrapper">
        {showBlog.map((blog) => {
          const {
            title,
            imgUrl,
            cetagory,
            author,
            date,
            description,
            uniqueID,
          } = blog;

          return (
            <Link
              to={`/blogDetail/${uniqueID}`}
              key={uniqueID}
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
      </div>

      <div className="navigate">
        {blogs.length > 0 ? (
          <p onClick={() => setShowBlog(blogs.slice(0, 12))}>1</p>
        ) : (
          ""
        )}
        {blogs.length > 12 ? (
          <p onClick={() => setShowBlog(blogs.slice(12, 24))}>2</p>
        ) : (
          ""
        )}
        {blogs.length > 24 ? (
          <p onClick={() => setShowBlog(blogs.slice(24, 36))}>3</p>
        ) : (
          ""
        )}
        {blogs.length > 36 ? (
          <p onClick={() => setShowBlog(blogs.slice(36, 48))}>4</p>
        ) : (
          ""
        )}
        {blogs.length > 48 ? (
          <p onClick={() => setShowBlog(blogs.slice(48, 60))}>5</p>
        ) : (
          ""
        )}
        {blogs.length > 60 ? (
          <p onClick={() => setShowBlog(blogs.slice(60, 72))}>6</p>
        ) : (
          ""
        )}
        {blogs.length > 72 ? (
          <p onClick={() => setShowBlog(blogs.slice(72, 84))}>5</p>
        ) : (
          ""
        )}
        {blogs.length > 84 ? (
          <p onClick={() => setShowBlog(blogs.slice(84, 96))}>5</p>
        ) : (
          ""
        )}
        {blogs.length > 96 ? (
          <p onClick={() => setShowBlog(blogs.slice(96, 108))}>5</p>
        ) : (
          ""
        )}
        {blogs.length > 108 ? (
          <p onClick={() => setShowBlog(blogs.slice(108, 120))}>5</p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default AllBlogs;
