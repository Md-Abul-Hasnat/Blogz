import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context/MainContext";
import img from "../../assets/img/img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import "./SpecificCetagory.css";
import { motion } from "framer-motion";

const SpecificCetagory = () => {
  const { cetagoryName } = useParams();
  const { blogs } = useContext(GlobalContext);
  const [selectedCetagorys, setSelectedCetagory] = useState([]);

  useEffect(() => {
    const blogsCetagory = blogs.filter(
      (blog) => blog.cetagory === cetagoryName
    );
    setSelectedCetagory(blogsCetagory);
  }, []);

  function reduceText(text, length) {
    return text.slice(0, length);
  }

  return (
    <motion.section
      className="specific-cetagory"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="specific-cetagory-head">
        <img src={img} alt="background img" />
        <h1> {cetagoryName} </h1>
        <div className="overlay"></div>
      </div>
      <div className="specific-cetagory-wrapper">
        {selectedCetagorys.map((selectedCetagory, i) => {
          const {
            title,
            imgUrl,
            cetagory,
            author,
            date,
            description,
            uniqueID,
          } = selectedCetagory;

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
          );
        })}
      </div>
    </motion.section>
  );
};

export default SpecificCetagory;
