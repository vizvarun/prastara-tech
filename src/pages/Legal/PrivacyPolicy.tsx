import { useState, useEffect, useRef } from "react";
import styles from "./LegalPages.module.css";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string>("section1");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Monitor scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // Find the section that is currently in view
      let currentSection = "section1";
      Object.keys(sectionRefs.current).forEach((sectionId) => {
        const section = sectionRefs.current[sectionId];
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  // Scroll to section when TOC link is clicked
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = sectionRefs.current[sectionId];
    if (section) {
      // Updated offset to account for fixed header
      const offsetTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Privacy Policy</h1>
          <p className={styles.pageDescription}>
            At Prastara Tech, we value your privacy and are committed to
            protecting your personal data. This Privacy Policy explains how we
            collect, use, and safeguard your information.
          </p>
        </div>

        <div className={styles.pageLayout}>
          <aside className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>Contents</h2>
            <ul className={styles.tocList}>
              <li
                className={`${styles.tocItem} ${
                  activeSection === "section1" ? styles.active : ""
                }`}
              >
                <a
                  href="#section1"
                  className={styles.tocLink}
                  onClick={scrollToSection("section1")}
                >
                  1. Information We Collect
                </a>
              </li>
              <li
                className={`${styles.tocItem} ${
                  activeSection === "section2" ? styles.active : ""
                }`}
              >
                <a
                  href="#section2"
                  className={styles.tocLink}
                  onClick={scrollToSection("section2")}
                >
                  2. How We Use Your Information
                </a>
              </li>
              <li
                className={`${styles.tocItem} ${
                  activeSection === "section3" ? styles.active : ""
                }`}
              >
                <a
                  href="#section3"
                  className={styles.tocLink}
                  onClick={scrollToSection("section3")}
                >
                  3. Information Sharing
                </a>
              </li>
              <li
                className={`${styles.tocItem} ${
                  activeSection === "section4" ? styles.active : ""
                }`}
              >
                <a
                  href="#section4"
                  className={styles.tocLink}
                  onClick={scrollToSection("section4")}
                >
                  4. Data Security
                </a>
              </li>
              <li
                className={`${styles.tocItem} ${
                  activeSection === "section5" ? styles.active : ""
                }`}
              >
                <a
                  href="#section5"
                  className={styles.tocLink}
                  onClick={scrollToSection("section5")}
                >
                  5. Your Rights
                </a>
              </li>
              <li
                className={`${styles.tocItem} ${
                  activeSection === "section6" ? styles.active : ""
                }`}
              >
                <a
                  href="#section6"
                  className={styles.tocLink}
                  onClick={scrollToSection("section6")}
                >
                  6. Changes to This Policy
                </a>
              </li>
              <li
                className={`${styles.tocItem} ${
                  activeSection === "section7" ? styles.active : ""
                }`}
              >
                <a
                  href="#section7"
                  className={styles.tocLink}
                  onClick={scrollToSection("section7")}
                >
                  7. Contact Us
                </a>
              </li>
            </ul>
          </aside>

          <div className={styles.contentSection}>
            <div
              id="section1"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section1 = el)}
            >
              <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
              <p className={styles.text}>
                We collect various types of information, including personal
                information (such as name, email address, and contact
                information), usage data, and technical data about how you
                interact with our website and services.
              </p>
            </div>

            <div
              id="section2"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section2 = el)}
            >
              <h2 className={styles.sectionTitle}>
                2. How We Use Your Information
              </h2>
              <p className={styles.text}>
                We use the information we collect to provide, maintain, and
                improve our services, communicate with you, and personalize your
                experience. We may also use your information to comply with
                legal obligations and protect our rights.
              </p>
            </div>

            <div
              id="section3"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section3 = el)}
            >
              <h2 className={styles.sectionTitle}>3. Information Sharing</h2>
              <p className={styles.text}>
                We do not sell your personal information. We may share your
                information with service providers who help us deliver our
                services, when required by law, or in connection with a business
                transaction.
              </p>
            </div>

            <div
              id="section4"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section4 = el)}
            >
              <h2 className={styles.sectionTitle}>4. Data Security</h2>
              <p className={styles.text}>
                We implement appropriate security measures to protect against
                unauthorized access, alteration, disclosure, or destruction of
                your personal information. However, no method of transmission
                over the Internet is 100% secure.
              </p>
            </div>

            <div
              id="section5"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section5 = el)}
            >
              <h2 className={styles.sectionTitle}>5. Your Rights</h2>
              <p className={styles.text}>
                Depending on your location, you may have rights regarding your
                personal information, such as the right to access, correct, or
                delete your data. To exercise these rights, please contact us at
                the information provided below.
              </p>
            </div>

            <div
              id="section6"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section6 = el)}
            >
              <h2 className={styles.sectionTitle}>6. Changes to This Policy</h2>
              <p className={styles.text}>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date.
              </p>
            </div>

            <div
              id="section7"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section7 = el)}
            >
              <h2 className={styles.sectionTitle}>7. Contact Us</h2>
              <p className={styles.text}>
                If you have any questions about this Privacy Policy, please
                contact us at info@prastaratech.com.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.lastUpdated}>Last Updated: April 24, 2025</div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
