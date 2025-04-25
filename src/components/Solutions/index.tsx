import styles from "./Solutions.module.css";
import allInOneIcon from "../../assets/icons/all-in-one-icon.svg";
import customerSupportIcon from "../../assets/icons/customer-support-icon.svg";
import smartAutomationTool from "../../assets/icons/smart-automation-tools-icon.svg";

const Solutions = () => {
  return (
    <section className={styles.section} id="solutions">
      <div className={styles.sectionContainer}>
        <p className={styles.sectionName}>SOLUTIONS</p>
        <h2 className={styles.sectionTitle}>
          Innovative And Customized Solutions For Your Business Needs
        </h2>
        <p className={styles.sectionContent}>
          We at Prastara provides innovative and customized solutions for your
          business needs. Whether you need a web application, a mobile app, a
          cloud service, or a software product, we have the expertise and
          experience to deliver it. We use the latest technologies and best
          practices to ensure quality, performance, and security. We also offer
          maintenance and support services to keep your software running
          smoothly. We work with you from the initial idea to the final launch,
          and beyond. We listen to your requirements, understand your goals, and
          design solutions that meet your expectations. We are not just
          developers, we are your partners in success.
        </p>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img
              src={allInOneIcon}
              alt="All In One Solution"
              className={styles.cardIcon}
            />
            <h4 className={styles.cardTitle}>All-In-One Solution</h4>
            <p className={styles.cardContent}>
              We offer all-in-one solutions for your business needs. We can
              handle every aspect of your software project, from planning and
              design, to development and testing, to deployment and maintenance.
            </p>
            {/* <a href="/services/web-development" className={styles.readMoreLink}>
              Read More <span className={styles.rightArrow}>→</span>
            </a> */}
          </div>

          <div className={styles.card}>
            <img
              src={customerSupportIcon}
              alt="Customer Support"
              className={styles.cardIcon}
            />
            <h4 className={styles.cardTitle}>Comprehensive Customer Support</h4>
            <p className={styles.cardContent}>
              With our Customer First approach we value our customers and their
              satisfaction. That's why we offer excellent customer service that
              is responsive, friendly, and professional.
            </p>
            {/* <a
              href="/services/mobile-solutions"
              className={styles.readMoreLink}
            >
              Read More <span className={styles.rightArrow}>→</span>
            </a> */}
          </div>

          <div className={styles.card}>
            <img
              src={smartAutomationTool}
              alt="Smart Automation Tools"
              className={styles.cardIcon}
            />
            <h4 className={styles.cardTitle}>Smart Automation Tools</h4>
            <p className={styles.cardContent}>
              At Prastara we specializes in building smart automation tools for
              your business. We can help you automate your workflows, processes,
              and tasks, using AI, machine learning, and natural language
              processing.
            </p>
            {/* <a href="/services/cloud-services" className={styles.readMoreLink}>
              Read More <span className={styles.rightArrow}>→</span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
