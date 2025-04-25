import { useState } from "react";
import styles from "./RequestEstimation.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const RequestEstimation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Request Estimation", // Fixed value
    projectDetails: "",
    budget: "",
    timeline: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitMessage(
        "Thank you! Your estimation request has been submitted. We'll get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Request Estimation", // Keep the fixed value
        projectDetails: "",
        budget: "",
        timeline: "",
        additionalInfo: "",
      });
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.requestEstimationPage}>
      <div className={styles.container}>
        <div className={styles.backLink}>
          <Link to="/" className={styles.backButton}>
            <FaArrowLeft className={styles.backIcon} /> Back to Home
          </Link>
        </div>

        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Request a Project Estimation</h1>
          <p className={styles.pageDescription}>
            Fill out the form below with your project details and we'll provide
            you with a free estimation.
          </p>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.estimationForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your email address"
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your phone number (optional)"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  className={`${styles.input} ${styles.disabledInput}`}
                  disabled
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="projectDetails" className={styles.label}>
                Project Details <span className={styles.required}>*</span>
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Please describe your project requirements, goals, and any specific features you need."
                rows={5}
                required
              ></textarea>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="budget" className={styles.label}>
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">Select your budget range</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="timeline" className={styles.label}>
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">Select expected timeline</option>
                  <option value="Less than 1 month">Less than 1 month</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="additionalInfo" className={styles.label}>
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Any other details that might help us understand your project better."
                rows={3}
              ></textarea>
            </div>

            <div className={styles.submitSection}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>

            {submitMessage && (
              <div
                className={`${styles.submitMessage} ${
                  submitMessage.includes("Thank you")
                    ? styles.successMessage
                    : styles.errorMessage
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestEstimation;
