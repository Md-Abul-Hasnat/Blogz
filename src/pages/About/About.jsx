import "./About.css";
import img from "../../assets/img/aboutus.jpeg";
import about from "../../assets/img/about.webp";
import about2 from "../../assets/img/about-2.jpg.webp";
import HomeRightPart from "../../components/HomeRightPart/HomeRightPart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="specific-cetagory-head">
        <img src={img} alt="background img" />
        <h1> ABOUT US </h1>
        <div className="overlay"></div>
      </div>
      <div className="about-wrapper">
        <div className="about-left">
          <div className="top">
            <img src={about} alt="about us" />
            <h2>About us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              ab laudantium voluptate aliquam nihil error esse repudiandae in
              mollitia et, consequuntur suscipit modi natus labore. Officiis
              voluptas itaque, hic voluptatibus provident accusantium! Quo,
              nesciunt enim sapiente eius corporis dolorum perferendis aut
              minus, fugiat odio inventore culpa ad rem illo molestiae
              distinctio. Consectetur eaque cumque debitis sint dolores ullam
              repellat et?
            </p>
          </div>
          <div className="bottom">
            <img src={about2} alt="about us" />
            <div className="bottom-right">
              <h2>Our mission</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                eaque provident dolore, distinctio aut maxime itaque possimus
                quisquam dolores iste.
              </p>
              <ul>
                <li>This is our mission one illum ornatus.</li>
                <li>This is our mission two illum ornatus.</li>
                <li>This is our mission three illum ornatus.</li>
              </ul>
            </div>
          </div>
          <div className="about-bottom">
            <h2>Follow us on</h2>
            <div className="social-icons">
              <FontAwesomeIcon className="icons" icon={faFacebookF} />
              <FontAwesomeIcon className="icons" icon={faTwitter} />
              <FontAwesomeIcon className="icons" icon={faInstagram} />
              <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
            </div>
          </div>
        </div>
        <div className="about-right">
          <HomeRightPart />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
