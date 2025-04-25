import styles from "./Estimations.module.css";
import { Link } from "react-router-dom";

const Estimations = () => {
  return (
    <section className={styles.section} id="estimations">
      <div className={styles.sectionContainer}>
        <p className={styles.sectionName}>ESTIMATIONS</p>
        <div className={styles.contentRow}>
          <h2 className={styles.sectionTitle}>
            Tech, Coding stuff & Hassle on us, Growth on you. How cool is that ?
          </h2>
          <Link to="/request-estimation" className={styles.ctaButton}>
            Request Estimation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Estimations;
