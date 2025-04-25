import { useState } from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import contactImage from "../../assets/icons/contact.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.sectionContainer}>
        <p className={styles.sectionName}>GET IN TOUCH</p>
        <h2 className={styles.sectionTitle}>Send Us a Message</h2>

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.contactImageContainer}>
              <img
                src={contactImage}
                alt="Contact us"
                className={styles.contactImage}
              />
            </div>
            <p className={styles.contactText}>
              Have a question or want to discuss a project? Fill out the form
              and our team will get back to you.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a
                  href="mailto:info@prastaratech.com"
                  className={styles.contactLink}
                >
                  info@prastaratech.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href="tel:+11234567890" className={styles.contactLink}>
                  +1 (123) 456-7890
                </a>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <a
                  href="https://www.google.com/maps/place/VICENZA+51+-ATLADRA/@22.2687136,73.1491991,1111m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395fc70d4236bdd9:0x18d0b5857c071f7d!8m2!3d22.2687136!4d73.151774!16s%2Fg%2F11g_tcy8h1?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  D401, Vicenza 51, Atladara, Vadodara, Gujarat, PIN: 390012
                </a>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your email"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your phone (optional)"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Your message"
                rows={4}
                required
              ></textarea>
            </div>

            <div className={styles.submitButtonContainer}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {submitMessage && (
              <p
                className={`${styles.submitFeedback} ${
                  submitMessage.includes("Thank you")
                    ? styles.success
                    : styles.error
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
