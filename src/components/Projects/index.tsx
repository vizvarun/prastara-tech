import styles from "./Projects.module.css";
import projectImage1 from "../../assets/images/project1.svg";
import projectImage2 from "../../assets/images/project2.svg";
import projectImage3 from "../../assets/images/project3.svg";
import projectImage1Dark from "../../assets/images/project1-dark.svg";
import projectImage2Dark from "../../assets/images/project2-dark.svg";
import projectImage3Dark from "../../assets/images/project3-dark.svg";
import aiIcon from "../../assets/icons/ai-icon.svg";
import { useTheme } from "../../context/ThemeContext";

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <section className={styles.section} id="projects">
      <div className={styles.sectionContainer}>
        <p className={styles.sectionName}> Built for Achievers, by Creatives</p>
        <div className={styles.projectRow}>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>
              Smart Financial Data Analysis with AI-Driven Insights
            </h3>
            <p className={styles.projectDescription}>
              We built an intelligent tool that automates data extraction,
              processing, and visualization for financial businesses. Enhanced
              with NLP and machine learning, it delivers actionable insights and
              boosts decision-making efficiency.
            </p>
            <ul className={styles.projectPoints}>
              <li>
                <img src={aiIcon} alt="AI" className={styles.pointIcon} />
                Extracts and processes data from multiple sources.
              </li>
              <li>
                <img src={aiIcon} alt="AI" className={styles.pointIcon} />
                Delivers AI-powered insights and smart recommendations.
              </li>
              <li>
                <img src={aiIcon} alt="AI" className={styles.pointIcon} />
                Enables real-time visualizations and better decisions.
              </li>
            </ul>
          </div>
          <div className={styles.projectImageContainer}>
            <img
              src={darkMode ? projectImage1Dark : projectImage1}
              alt="Enterprise Business Applications"
              className={styles.projectImage}
            />
          </div>
        </div>

        <div className={`${styles.projectRow} ${styles.reversed}`}>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>
              AI-Powered Legal Document Automation for Smarter Workflows
            </h3>
            <p className={styles.projectDescription}>
              We built a tool that generates legal documents based on user
              input, checks for errors and compliance, and improves
              accuracy—saving legal teams valuable time, effort, and operational
              costs.
            </p>
            <ul className={styles.projectPoints}>
              <li>
                <img src={aiIcon} alt="AI" className={styles.pointIcon} />
                Generates legal documents based on user input.
              </li>
              <li>
                <img src={aiIcon} alt="AI" className={styles.pointIcon} />
                Uses AI to ensure compliance and consistency.
              </li>
              <li>
                <img src={aiIcon} alt="AI" className={styles.pointIcon} />
                Improves accuracy while reducing time and cost.
              </li>
            </ul>
          </div>
          <div className={styles.projectImageContainer}>
            <img
              src={darkMode ? projectImage2Dark : projectImage2}
              alt="Mobile Solutions"
              className={styles.projectImage}
            />
          </div>
        </div>

        <div className={styles.projectRow}>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>
              AI Chatbot for Smarter Travel Booking Experiences
            </h3>
            <p className={styles.projectDescription}>
              We built a smart chatbot that interacts via text or voice, books
              travel services through APIs, and enhances customer service using
              NLP and speech recognition—making travel planning seamless and
              intuitive.
            </p>
            <ul className={styles.projectPoints}>
              <li>
                <img src={aiIcon} alt="AI" className={styles.pointIcon} />
                Chats via voice or text using smart NLP.
              </li>
              <li>
                <img src={aiIcon} alt="AI" className={styles.pointIcon} />
                Books flights, hotels, and tours with APIs.
              </li>
              <li>
                <img src={aiIcon} alt="AI" className={styles.pointIcon} />
                Improves customer satisfaction with faster service.
              </li>
            </ul>
          </div>
          <div className={styles.projectImageContainer}>
            <img
              src={darkMode ? projectImage3Dark : projectImage3}
              alt="E-commerce Platforms"
              className={styles.projectImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
