import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../components/context/MainContext";
import "./AllBlogs.css";
import img from "../../assets/img/blog.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClock,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AllBlogs = () => {
  const {
    blogs,
    user,
    updateBlog,
    handleDelete,
    setIsDelete,
    isDelete,
    reduceText,
  } = useContext(GlobalContext);

  const [showBlog, setShowBlog] = useState(blogs.slice(0, 12));

  useEffect(() => {
    setShowBlog(blogs.slice(0, 12));
  }, [blogs]);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="specific-cetagory">
        <div className="specific-cetagory-head">
          <img src={img} alt="background img" />
          <h1> All OUR BLOGS </h1>
          <div className="overlay"></div>
        </div>
        <div className="specific-cetagory-wrapper">
          <div
            className={
              isDelete.value ? "delete-warning" : "delete-warning disabled"
            }
          >
            <div className="delete-warning-wrapper">
              <h1>Do you want to delete this blog ?</h1>
              <div className="buttons">
                <button
                  onClick={() =>
                    setIsDelete({ value: !isDelete.value, id: "" })
                  }
                >
                  Cencel
                </button>
                <button onClick={() => handleDelete(isDelete.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          {showBlog.map((blog) => {
            const {
              title,
              imgUrl,
              cetagory,
              author,
              date,
              description,
              uniqueID,
              id,
            } = blog;

            return (
              <article key={uniqueID} className="main-blog-card">
                <Link to={`/blogDetail/${uniqueID}`} className="all-blog-card">
                  <div className="top">
                    <LazyLoadImage
                      effect="blur"
                      src={imgUrl}
                      alt="blog"
                      width={"100%"}
                    />
                    <p className="cetagory-name">{cetagory}</p>
                  </div>
                  <div className="bottom">
                    <div className="info">
                      <p>
                        <FontAwesomeIcon className="icon" icon={faUser} />
                        {author}
                      </p>
                      <p>
                        <FontAwesomeIcon className="icon" icon={faClock} />
                        {date}
                      </p>
                    </div>
                    <h2 className="blog-title">{reduceText(title, 45)}...</h2>
                    <p className="blog-text">
                      {reduceText(description, 140)}...
                    </p>
                  </div>
                </Link>
                {user.uid === blog.userID ? (
                  <>
                    <div className="blog-bottom-icon">
                      <FontAwesomeIcon
                        onClick={() => updateBlog(id)}
                        className="icon"
                        icon={faEdit}
                      />
                      <FontAwesomeIcon
                        onClick={() =>
                          setIsDelete({ value: !isDelete.value, id: id })
                        }
                        className="icon"
                        icon={faTrash}
                      />
                    </div>
                  </>
                ) : (
                  ""
                )}
              </article>
            );
          })}
        </div>

        <div className="navigate">
          {blogs.length > 0 ? (
            <p
              onClick={() => {
                setShowBlog(blogs.slice(0, 12));
                document.documentElement.scrollTo(0, 0);
              }}
            >
              1
            </p>
          ) : (
            ""
          )}
          {blogs.length > 12 ? (
            <p
              onClick={() => {
                setShowBlog(blogs.slice(12, 24));
                document.documentElement.scrollTo(0, 0);
              }}
            >
              2
            </p>
          ) : (
            ""
          )}
          {blogs.length > 24 ? (
            <p
              onClick={() => {
                setShowBlog(blogs.slice(24, 36));
                document.documentElement.scrollTo(0, 0);
              }}
            >
              3
            </p>
          ) : (
            ""
          )}
          {blogs.length > 36 ? (
            <p
              onClick={() => {
                setShowBlog(blogs.slice(36, 48));
                document.documentElement.scrollTo(0, 0);
              }}
            >
              4
            </p>
          ) : (
            ""
          )}
          {blogs.length > 48 ? (
            <p
              onClick={() => {
                setShowBlog(blogs.slice(48, 60));
                document.documentElement.scrollTo(0, 0);
              }}
            >
              5
            </p>
          ) : (
            ""
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default AllBlogs;
