import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";
import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const dropdownTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      window.clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setShowProductsDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setShowProductsDropdown(false);
    }, 300); // 300ms delay before hiding
  };

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.innerWidth <= 1000) {
      // For mobile: toggle the accordion
      setMobileProductsOpen(!mobileProductsOpen);
    } else {
      // For desktop: show/hide dropdown
      setShowProductsDropdown(!showProductsDropdown);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // When opening mobile menu, prevent body scroll
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (dropdownTimeoutRef.current) {
        window.clearTimeout(dropdownTimeoutRef.current);
      }
      // Ensure body scroll is restored when component unmounts
      document.body.style.overflow = "";
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // When on a different page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
      return;
    }

    // When already on home page, smooth scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }

    // Close mobile menu after navigation
    closeMobileMenu();
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logo}>
          <img src="/logo.svg" alt="Prastara Tech" />
        </a>

        <div
          className={`${styles.overlay} ${
            mobileMenuOpen ? styles.overlayVisible : ""
          }`}
          onClick={closeMobileMenu}
        ></div>

        <ul
          className={`${styles.menu} ${mobileMenuOpen ? styles.menuOpen : ""}`}
        >
          <li>
            <a
              href="/#hero"
              onClick={scrollToSection("hero")}
              className={styles.navLink}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#about"
              onClick={scrollToSection("about")}
              className={styles.navLink}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#solutions"
              onClick={scrollToSection("solutions")}
              className={styles.navLink}
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              onClick={scrollToSection("projects")}
              className={styles.navLink}
            >
              Projects
            </a>
          </li>
          <li
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
            className={`${styles.dropdownContainer} ${
              mobileProductsOpen ? styles.dropdownOpen : ""
            }`}
          >
            {/* Products link */}
            <div
              className={styles.dropdownToggle}
              onClick={handleProductsClick}
            >
              Products <span className={styles.chevron}>▾</span>
            </div>

            {/* Desktop dropdown - only visible on desktop */}
            {showProductsDropdown && (
              <div
                className={styles.dropdown}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <div className={styles.dropdownArrow}></div>
                <div className={styles.dropdownHeader}>Our Products</div>
                <Link to="/products/greatminds" className={styles.dropdownItem}>
                  <span className={styles.productName}>GreatMinds</span>
                  <span className={styles.productDesc}>
                    AI-powered learning platform
                  </span>
                </Link>
              </div>
            )}
          </li>

          {/* Mobile dropdown positioned immediately after Products */}
          {/* This is outside the Products li to appear below it */}
          <div
            className={`${styles.mobileDropdown} ${
              mobileProductsOpen ? styles.mobileDropdownOpen : ""
            }`}
          >
            <Link
              to="/products/greatminds"
              className={styles.mobileDropdownItem}
              onClick={closeMobileMenu}
            >
              <span className={styles.productName}>GreatMinds</span>
              <span className={styles.productDesc}>
                AI-powered learning platform
              </span>
            </Link>
            {/* Can add more products here */}
          </div>

          <li>
            <a
              href="/#testimonials"
              onClick={scrollToSection("testimonials")}
              className={styles.navLink}
            >
              Clients
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              onClick={scrollToSection("contact")}
              className={styles.navLink}
            >
              Contact
            </a>
          </li>

          {/* Theme toggle in desktop menu only */}
          <li className={styles.desktopOnly}>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <img
                  src={SunIcon}
                  alt="Light mode"
                  className={styles.themeIcon}
                />
              ) : (
                <img
                  src={MoonIcon}
                  alt="Dark mode"
                  className={styles.themeIcon}
                />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile controls - visible only on mobile */}
        <div className={styles.navControls}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <img
                src={SunIcon}
                alt="Light mode"
                className={styles.themeIcon}
              />
            ) : (
              <img
                src={MoonIcon}
                alt="Dark mode"
                className={styles.themeIcon}
              />
            )}
          </button>

          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
