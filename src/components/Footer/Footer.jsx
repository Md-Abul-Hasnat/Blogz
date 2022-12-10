import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();

  return (
    <section className="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <Link to={"/"}>
            <h1>BLOGZ</h1>
          </Link>
          <h3>
            <Link to={"/"}>Privacy policy</Link>
          </h3>
          <p>
            © Copyright {`${date.getFullYear()}`} All rights reserved by BLOGZ{" "}
          </p>
          <div className="social-icons">
            <FontAwesomeIcon className="icon" icon={faFacebookF} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
          </div>
        </div>
        <div className="footer-center">
          <h2>Useful Links </h2>
          <ul>
            <li>
              <Link to={"/"}> Home </Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/create"}>Create</Link>
            </li>
            <li>
              <Link to={"/allblogs"}> All Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Contact Info</h2>
          <article>
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            <p>Uposhohar, Sylhet, Bangladesh</p>
          </article>
          <article>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <p>
              <a href="mailto:Webdevhasnat@gmail.com">Webdevhasnat@gmail</a>
            </p>
          </article>
          <article>
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <p>+0123456789</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Footer;
