import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.sectionContainer}>
        <p className={styles.sectionName}>ABOUT US</p>
        <h2 className={styles.sectionTitle}>
          With The Right Software, Great Things Can Happen
        </h2>
        <p className={styles.sectionContent}>
          In today's globally connected and rapidly evolving business landscape,
          even the greatest ideas require the right set of tools to be
          communicated clearly, effectively, and impactfully. To truly succeed,
          organizations must be equipped to collaborate seamlessly with their
          clients, partners, vendors, and stakeholders across borders and time
          zones. Without the ability to convey value, align visions, and foster
          strong professional relationships, even the most brilliant concepts
          can get lost in translation. That's why the right communication and
          collaboration platform isn't just a convenience—it's a competitive
          advantage.
        </p>
      </div>
    </section>
  );
};

export default About;
