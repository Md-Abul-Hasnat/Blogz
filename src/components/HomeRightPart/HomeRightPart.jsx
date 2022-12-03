import "./HomeRightPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import img from "../../assets/img/blog1.jpg";

const HomeRightPart = () => {
  return (
    <div className="right-section">
      <div className="about-blogz">
        <h1>BLOGZ</h1>
        <p>
          Hello, We’re content writer who is fascinated by content fashion,
          celebrity and lifestyle. We helps clients bring the right content to
          the right people.
        </p>
        <div className="social-icons">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
        </div>
      </div>

      <div className="explore-topics">
        <h1>Explore Topics</h1>
        <ul>
          <li>
            <small>Culture</small> <small>1</small>
          </li>
          <li>
            <small>Sports</small> <small>1</small>
          </li>
          <li>
            <small>Religion</small> <small>1</small>
          </li>
          <li>
            <small>Games</small> <small>1</small>
          </li>
          <li>
            <small>Politics</small> <small>1</small>
          </li>
        </ul>
      </div>

      <div className="popular-posts">
        <h1>Popular Posts</h1>
        <article>
          <img src={img} alt="Popular blog" />
          <div className="detail">
            <h4>3 Easy Ways To Make Your iPhone Faster</h4>
            <p>26 August 2022</p>
          </div>
        </article>
        <article>
          <img src={img} alt="Popular blog" />
          <div className="detail">
            <h4>3 Easy Ways To Make Your iPhone Faster</h4>
            <p>26 August 2022</p>
          </div>
        </article>
        <article>
          <img src={img} alt="Popular blog" />
          <div className="detail">
            <h4>3 Easy Ways To Make Your iPhone Faster</h4>
            <p>26 August 2022</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default HomeRightPart;
