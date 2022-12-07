import "./HomeBlog.css";
import { useContext } from "react";
import { GlobalContext } from "../context/MainContext";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useState } from "react";

const HomeBlog = () => {
  const { blogs, user } = useContext(GlobalContext);
  const [isDelete, setIsDelete] = useState({ value: false, id: "" });

  function reduceText(text, length) {
    return text.slice(0, length);
  }

  async function handleDelete(id) {
    await deleteDoc(doc(db, "blogs", `${id}`));
    setIsDelete({ value: false, id: "" });
  }

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
      {blogs.slice(0, 8).map((blog) => {
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
            {user.uid === blog.userID ? (
              <>
                <div className="blog-bottom-icon">
                  <FontAwesomeIcon className="icon" icon={faEdit} />
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
