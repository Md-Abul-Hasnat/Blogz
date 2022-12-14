import "./HomeBlog.css";
import { useContext } from "react";
import { GlobalContext } from "../context/MainContext";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const HomeBlog = () => {
  const {
    blogs,
    user,
    updateBlog,
    handleDelete,
    setIsDelete,
    isDelete,
    reduceText,
  } = useContext(GlobalContext);

  const homeBlogs = blogs.filter(
    (blog) =>
      blog.cetagory === "Sports" ||
      blog.cetagory === "Programming" ||
      blog.cetagory === "Gaming"
  );
  return (
    <>
      <div
        className={
          isDelete.value ? "delete-warning" : "delete-warning disabled"
        }
      >
        <div className="delete-warning-wrapper">
          <h1>Do you want to delete this blog ?</h1>
          <div className="buttons">
            <button
              onClick={() => setIsDelete({ value: !isDelete.value, id: "" })}
            >
              Cencel
            </button>
            <button onClick={() => handleDelete(isDelete.id)}>Delete</button>
          </div>
        </div>
      </div>
      {homeBlogs.slice(0, 8).map((blog) => {
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
          <article key={id} className="main-blog-card">
            <Link to={`/blogDetail/${uniqueID}`} className="blog-card">
              <div className="top">
                <LazyLoadImage
                  effect="blur"
                  src={imgUrl}
                  alt="blog"
                  width={"100%"}
                />
                <p className="cetagory-name">{cetagory} </p>
              </div>
              <div className="bottom">
                <div className="info">
                  <p>
                    <FontAwesomeIcon className="icon" icon={faUser} /> {author}
                  </p>
                  <p>
                    <FontAwesomeIcon className="icon" icon={faClock} /> {date}
                  </p>
                </div>
                <h2 className="blog-title">{reduceText(title, 60)}...</h2>
                <p className="blog-text">{reduceText(description, 140)}...</p>
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
      <Link className="view-btn" to={"/allBlogs"}>
        View All Blogs
      </Link>
    </>
  );
};

export default HomeBlog;
