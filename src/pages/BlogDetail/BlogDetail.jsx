import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context/MainContext";
import HomeRightPart from "../../components/HomeRightPart/HomeRightPart";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useContext(GlobalContext);

  const targetedBlog = blogs.find((blog) => blog.uniqueID === id);

  const reletedBlogs = blogs.filter(
    (blog) =>
      blog.cetagory === targetedBlog.cetagory &&
      blog.uniqueID !== targetedBlog.uniqueID
  );

  const { author, cetagory, description, date, imgUrl, title } = targetedBlog;

  function reduceText(text, length) {
    return text.slice(0, length);
  }

  return (
    <section className="blog-detail">
      <div className="blog-detail-wrapper">
        <div className="blog-detali-left">
          <small>
            BLOGZ / {cetagory} / {title}
          </small>

          <h1>{title}</h1>
          <p>
            {author} / {date}
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
                      <p> {author} </p>
                      <p> {date} </p>
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
    </section>
  );
};

export default BlogDetail;
