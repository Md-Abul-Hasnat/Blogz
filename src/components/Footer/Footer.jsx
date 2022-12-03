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

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <h1>BLOGZ</h1>
          <h3>About the company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sequi,
            aliquam odit facere necessitatibus quas rerum qui non in. Totam?
          </p>
          <div className="social-icons">
            <FontAwesomeIcon className="icon" icon={faFacebookF} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
          </div>
        </div>
        <div className="footer-right">
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
