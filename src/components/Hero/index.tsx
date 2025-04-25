import styles from "./Hero.module.css";
import HeroImage from "../../assets/images/hero.png";
const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={`${styles.wordWithDot} ${styles.titleSpan}`}>
              Communicate
              <span className={`${styles.coloredDot} ${styles.titleSpan}`}>
                .
              </span>
            </span>{" "}
            <span className={`${styles.wordWithDot} ${styles.titleSpan}`}>
              Collaborate
              <span className={`${styles.coloredDot} ${styles.titleSpan}`}>
                .
              </span>
            </span>{" "}
            <span className={`${styles.wordWithDot} ${styles.titleSpan}`}>
              Create
              <span className={`${styles.coloredDot} ${styles.titleSpan}`}>
                .
              </span>
            </span>
          </h1>
          <div className={styles.ctaContainer}>
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("solutions")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={styles.ctaPrimary}
            >
              Learn More
            </a>
          </div>
          <div className={styles.heroImageContainer}>
            <img
              src={HeroImage}
              alt="Prastara Tech Hero"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
