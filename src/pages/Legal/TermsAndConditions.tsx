import { useState, useEffect, useRef } from "react";
import styles from "./LegalPages.module.css";

const TermsAndConditions = () => {
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
          <h1 className={styles.pageTitle}>Terms and Conditions</h1>
          <p className={styles.pageDescription}>
            Please read these terms and conditions carefully before using our
            services. By accessing or using Prastara Tech's services, you agree
            to be bound by these terms.
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
                  1. Introduction
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
                  2. Use of Services
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
                  3. Intellectual Property
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
                  4. Limitation of Liability
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
                  5. Governing Law
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
                  6. Changes to Terms
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
              <h2 className={styles.sectionTitle}>1. Introduction</h2>
              <p className={styles.text}>
                Welcome to Prastara Tech. These Terms and Conditions govern your
                use of our website and services. By accessing or using our
                services, you agree to be bound by these Terms.
              </p>
            </div>

            <div
              id="section2"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section2 = el)}
            >
              <h2 className={styles.sectionTitle}>2. Use of Services</h2>
              <p className={styles.text}>
                Our services are provided for business and professional use. You
                are responsible for maintaining the confidentiality of your
                account information and for all activities that occur under your
                account.
              </p>
            </div>

            <div
              id="section3"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section3 = el)}
            >
              <h2 className={styles.sectionTitle}>3. Intellectual Property</h2>
              <p className={styles.text}>
                All content, features, and functionality of our services,
                including but not limited to text, graphics, logos, and
                software, are owned by Prastara Tech and are protected by
                copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div
              id="section4"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section4 = el)}
            >
              <h2 className={styles.sectionTitle}>
                4. Limitation of Liability
              </h2>
              <p className={styles.text}>
                To the maximum extent permitted by law, Prastara Tech shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly.
              </p>
            </div>

            <div
              id="section5"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section5 = el)}
            >
              <h2 className={styles.sectionTitle}>5. Governing Law</h2>
              <p className={styles.text}>
                These Terms shall be governed by and construed in accordance
                with the laws of India, without regard to its conflict of law
                provisions.
              </p>
            </div>

            <div
              id="section6"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section6 = el)}
            >
              <h2 className={styles.sectionTitle}>6. Changes to Terms</h2>
              <p className={styles.text}>
                We reserve the right to modify or replace these Terms at any
                time. Your continued use of our services after any such changes
                constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div
              id="section7"
              className={styles.section}
              ref={(el) => (sectionRefs.current.section7 = el)}
            >
              <h2 className={styles.sectionTitle}>7. Contact Us</h2>
              <p className={styles.text}>
                If you have any questions about these Terms, please contact us
                at info@prastaratech.com.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.lastUpdated}>Last Updated: April 24, 2025</div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
