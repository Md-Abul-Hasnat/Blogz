import "./HomeBlog.css";
import blog1 from "../../assets/img/blog1.jpg";
import blog2 from "../../assets/img/blog2.jpg";

const HomeBlog = () => {
  function reduceText(text, length) {
    return text.slice(0, length);
  }

  return (
    <>
      <article className="blog-card">
        <div className="top">
          <img src={blog1} alt="blog" />
          <p className="cetagory-name">Sports</p>
        </div>
        <div className="bottom">
          <div className="info">
            <p>Author name</p>
            <p>30 Aug 2022</p>
          </div>
          <h2 className="blog-title">
            How To Learn Everything About Construction
          </h2>
          <p className="blog-text">
            {reduceText(
              `The European languages are members of the same family.
            Their separate existence is a myth. For science, music, sport,
            etc`,
              150
            )}
          </p>
        </div>
      </article>
      <article className="blog-card">
        <div className="top">
          <img src={blog2} alt="blog" />

          <p className="cetagory-name">Sports</p>
        </div>
        <div className="bottom">
          <div className="info">
            <p>Author name</p>
            <p>30 Aug 2022</p>
          </div>
          <h2 className="blog-title">
            How To Learn Everything About Construction
          </h2>
          <p className="blog-text">
            {reduceText(
              `The European languages are members of the same family.
            Their separate existence is a myth. For science, music, sport,
            etc`,
              150
            )}
          </p>
        </div>
      </article>
      <article className="blog-card">
        <div className="top">
          <img src={blog2} alt="blog" />
        </div>
        <div className="bottom">
          <div className="info">
            <p>Author name</p>
            <p>30 Aug 2022</p>
          </div>
          <h2 className="blog-title">
            How To Learn Everything About Construction
          </h2>
          <p className="blog-text">
            {reduceText(
              `The European languages are members of the same family.
            Their separate existence is a myth. For science, music, sport,
            etc`,
              150
            )}
          </p>
        </div>
      </article>
      <article className="blog-card">
        <div className="top">
          <img src={blog2} alt="blog" />
        </div>
        <div className="bottom">
          <div className="info">
            <p>Author name</p>
            <p>30 Aug 2022</p>
          </div>
          <h2 className="blog-title">
            How To Learn Everything About Construction
          </h2>
          <p className="blog-text">
            {reduceText(
              `The European languages are members of the same family.
            Their separate existence is a myth. For science, music, sport,
            etc`,
              150
            )}
          </p>
        </div>
      </article>
      <article className="blog-card">
        <div className="top">
          <img src={blog2} alt="blog" />
        </div>
        <div className="bottom">
          <div className="info">
            <p>Author name</p>
            <p>30 Aug 2022</p>
          </div>
          <h2 className="blog-title">
            How To Learn Everything About Construction
          </h2>
          <p className="blog-text">
            {reduceText(
              `The European languages are members of the same family.
            Their separate existence is a myth. For science, music, sport,
            etc`,
              150
            )}
          </p>
        </div>
      </article>
      <article className="blog-card">
        <div className="top">
          <img src={blog2} alt="blog" />
        </div>
        <div className="bottom">
          <div className="info">
            <p>Author name</p>
            <p>30 Aug 2022</p>
          </div>
          <h2 className="blog-title">
            How To Learn Everything About Construction
          </h2>
          <p className="blog-text">
            {reduceText(
              `The European languages are members of the same family.
            Their separate existence is a myth. For science, music, sport,
            etc`,
              150
            )}
          </p>
        </div>
      </article>
    </>
  );
};

export default HomeBlog;
