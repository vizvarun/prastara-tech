import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.copyright}>
            &copy; {year} Prastara Tech. All rights reserved.
          </div>

          <div className={styles.links}>
            <Link to="/terms-and-conditions" className={styles.policyLink}>
              Terms & Conditions
            </Link>
            <span className={styles.divider}>|</span>
            <Link to="/privacy-policy" className={styles.policyLink}>
              Privacy Policy
            </Link>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/people/Prastara/100095214879017/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/@PrastaraT"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/@Prastara"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
