import styles from "./GreatMinds.module.css";
import playStoreLogo from "../../assets/images/play-store.png";
import playStoreQR from "../../assets/images/qr-android.png";
import appStoreLogo from "../../assets/images/app-store.png";
import appStoreQR from "../../assets/images/qr-iOS.png";

const GreatMinds = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.productTitle}>GreatMinds</h1>
          <p className={styles.productTagline}>
            Streamline Your School Operations with Our Powerful School
            Management Application
          </p>
          <a
            href="#download"
            className={styles.ctaButton}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("download")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Download App
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Tired of juggling multiple systems and paperwork for your school?
          </h2>
          <p className={styles.sectionContent}>
            Our comprehensive school management application is designed to
            simplify your life, boost efficiency, and enhance communication
            across your entire institution.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Here’s how our solution can transform your school:
          </h2>
          <div className={styles.useCases}>
            <div className={styles.useCase}>
              <h3 className={styles.useCaseTitle}>Effortless Management</h3>
              <ul className={styles.useCaseList}>
                <li>
                  <strong>Centralized platform:</strong> Manage all aspects of
                  your school, from student enrollment and attendance to grades,
                  fees, exams and timetables, in one intuitive interface.
                </li>
                <li>
                  <strong>Automated tasks:</strong> Reduce manual work with
                  automated processes for attendance tracking, report
                  generation, and communication.
                </li>
                <li>
                  <strong>Seamless data flow:</strong> Eliminate data silos and
                  ensure everyone has access to the latest information with
                  real-time updates.
                </li>
              </ul>
            </div>

            <div className={styles.useCase}>
              <h3 className={styles.useCaseTitle}>
                Enhanced Communication & Collaboration:
              </h3>
              <ul className={styles.useCaseList}>
                <li>
                  <strong>Bridge the gap:</strong> Foster communication between
                  teachers, students, parents, and administrators through
                  built-in chat, email, notifications, and forums.
                </li>
                <li>
                  <strong>Transparent communication:</strong> Share
                  announcements, assignments, and updates instantly, keeping
                  everyone informed and engaged.
                </li>
                <li>
                  <strong>Streamlined collaboration:</strong> Facilitate
                  teamwork among teachers with shared calendars, resource
                  libraries, and discussion boards.
                </li>
              </ul>
            </div>

            <div className={styles.useCase}>
              <h3 className={styles.useCaseTitle}>Accessible & Secure:</h3>
              <ul className={styles.useCaseList}>
                <li>
                  <strong>Cloud-based accessibility:</strong> Access your
                  application from any device, anywhere with an internet
                  connection.
                </li>
                <li>
                  <strong>Robust security:</strong> Protect sensitive data with
                  industry-standard encryption and secure backup systems.
                </li>
                <li>
                  <strong>Reliable performance:</strong> Enjoy consistent
                  performance and uptime to ensure your school operations run
                  smoothly.
                </li>
              </ul>
            </div>

            <div className={styles.useCase}>
              <h3 className={styles.useCaseTitle}>Scalable & Customizable:</h3>
              <ul className={styles.useCaseList}>
                <li>
                  <strong>Grow with your needs:</strong> Add or modify features
                  to fit your unique school size and requirements.
                </li>
                <li>
                  <strong>Tailored solution:</strong> Choose from a range of
                  customization options to match your specific workflows and
                  preferences.
                </li>
                <li>
                  <strong>Future-proof technology:</strong> Invest in a solution
                  that can adapt and evolve alongside your school’s needs.
                </li>
              </ul>
            </div>

            <div className={styles.useCase}>
              <h3 className={styles.useCaseTitle}>More Than Just Software:</h3>
              <ul className={styles.useCaseList}>
                <li>
                  <strong>Dedicated support:</strong> Our team is here to assist
                  you with every step of the way, from implementation to ongoing
                  training and support.
                </li>
                <li>
                  <strong>Continual development:</strong> We are committed to
                  regularly updating and improving our application with new
                  features and enhancements.
                </li>
                <li>
                  <strong>A partner in your success:</strong> We believe in the
                  power of education and are dedicated to helping your school
                  achieve its full potential.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Ready to experience the difference a comprehensive school management
            application can make?
          </h2>
          <p className={styles.ctaText}>
            Contact us today for a free demo and discover how we can help you
            build a thriving school community. Don’t settle for anything less
            than the best. Choose our school management application and empower
            your school to reach new heights.
          </p>
        </div>
      </section>

      <section className={styles.downloadSection} id="download">
        <div className={styles.downloadContainer}>
          <h2 className={styles.downloadTitle}>Download GreatMinds</h2>
          <p className={styles.downloadText}>
            Get our mobile app to manage your school on the go. Available on
            Android and iOS devices.
          </p>

          <div className={styles.storeLinks}>
            <div className={styles.storeOption}>
              <h3>Download for Android</h3>
              <div className={styles.storeContent}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.greatminds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeButton}
                >
                  <img
                    src={playStoreLogo}
                    alt="Get it on Google Play"
                    className={styles.storeLogo}
                  />
                </a>
                <div className={styles.qrContainer}>
                  <img
                    src={playStoreQR}
                    alt="Google Play QR Code"
                    className={styles.qrCode}
                  />
                  <p>Scan to download</p>
                </div>
              </div>
            </div>

            <div className={styles.storeOption}>
              <h3>Download for iOS</h3>
              <div className={styles.storeContent}>
                <a
                  href="https://apps.apple.com/in/app/greatminds/id6448904387"
                  className={styles.storeButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={appStoreLogo}
                    alt="Download on the App Store"
                    className={styles.storeLogo}
                  />
                </a>
                <div className={styles.qrContainer}>
                  <img
                    src={appStoreQR}
                    alt="App Store QR Code"
                    className={styles.qrCode}
                  />
                  <p>Scan to download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreatMinds;
