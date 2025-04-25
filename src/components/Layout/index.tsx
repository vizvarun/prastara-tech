import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <ScrollToTopOnMount />
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
