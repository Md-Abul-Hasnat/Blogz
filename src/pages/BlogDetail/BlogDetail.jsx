import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context/MainContext";
import HomeRightPart from "../../components/HomeRightPart/HomeRightPart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import "./BlogDetail.css";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs, reduceText } = useContext(GlobalContext);

  const targetedBlog = blogs.find((blog) => blog.uniqueID === id);

  const reletedBlogs = blogs.filter(
    (blog) =>
      blog.cetagory === targetedBlog.cetagory &&
      blog.uniqueID !== targetedBlog.uniqueID
  );

  const { author, cetagory, description, date, imgUrl, title } = targetedBlog;

  return (
    <motion.section
      className="blog-detail"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="blog-detail-wrapper">
        <div className="blog-detali-left">
          <small>
            BLOGZ / {cetagory} / {title}
          </small>

          <h1>{title}</h1>
          <p>
            <FontAwesomeIcon className="icon" icon={faUser} /> {author} /
            <FontAwesomeIcon className="icon" icon={faClock} /> {date}
          </p>
          <img src={imgUrl} alt="blog image" />
          <p className="desc"> {description}</p>
        </div>
        <div className="blog-detali-right">
          <HomeRightPart />
        </div>
      </div>

      {reletedBlogs.length > 0 && (
        <div className="releted-blogs">
          <h1>Releted Blogs :</h1>
          <div className="releted-blogs-wrapper">
            {reletedBlogs.slice(0, 4).map((blog, i) => {
              const { title, imgUrl, cetagory, author, date, uniqueID } = blog;
              return (
                <Link
                  to={`/blogDetail/${uniqueID}`}
                  key={i}
                  className="releted-blog"
                >
                  <div className="top">
                    <img src={imgUrl} alt="blog" />
                    <p className="cetagory-name">{cetagory} </p>
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
                    <h2 className="blog-title">{reduceText(title, 30)}...</h2>
                    <p className="blog-text">
                      {reduceText(description, 80)}...
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default BlogDetail;
