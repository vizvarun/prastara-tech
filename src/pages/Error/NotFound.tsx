import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <div className={styles.imageContainer}>
            <div className={styles.iconGroup}>
              <FaExclamationTriangle className={styles.notFoundIcon} />
              <FaSearch className={styles.searchIcon} />
              <FaQuestionCircle className={styles.questionIcon} />
            </div>
          </div> */}
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>Page Not Found</h2>
          <p className={styles.errorMessage}>
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.primaryButton}>
              Back to Home
            </Link>
          </div>
          <div className={styles.suggestionsContainer}>
            <p className={styles.suggestionsTitle}>You might try:</p>
            <ul className={styles.suggestionsList}>
              <li>Checking the URL for typos</li>
              <li>Using the navigation menu above</li>
              <li>Starting fresh from our homepage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
