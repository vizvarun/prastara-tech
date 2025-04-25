import { useState, useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// Sample testimonial data - in a real app, this might come from an API or CMS
const testimonials = [
  {
    id: 1,
    quote:
      "Prastara Tech delivered exactly what we needed. Their team understood our requirements perfectly and implemented a solution that exceeded our expectations.",
    name: "Sarah Johnson",
    position: "CTO",
    company: "InnovateTech Solutions",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    quote:
      "Working with Prastara Tech transformed our business operations. Their AI-driven solutions helped us automate workflows and reduce operational costs by 40%.",
    name: "Michael Chen",
    position: "Operations Director",
    company: "Global Systems Inc.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    id: 3,
    quote:
      "The team at Prastara Tech are true professionals. They tackled our complex requirements with ease and delivered a robust, scalable solution on time and on budget.",
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "NextGen Software",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<number | null>(null);

  // Navigate to the previous testimonial
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next testimonial
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get previous and next index for adjacent cards
  const getPrevIndex = () => {
    return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  };

  // Set up automatic sliding
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = window.setTimeout(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    // Cleanup timeout when component unmounts or when slide changes
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.sectionContainer}>
        <p className={styles.sectionName}>Success Stories</p>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>

        <div
          className={styles.carouselContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className={styles.navIcon} />
          </button>

          <div className={styles.carousel}>
            {testimonials.map((testimonial, index) => {
              // Determine if this card is the previous or next one
              const isPrev = index === getPrevIndex();
              const isNext = index === getNextIndex();
              const isCurrent = index === currentIndex;

              let cardClass = styles.testimonialCard;
              if (isCurrent) cardClass += ` ${styles.active}`;
              if (isPrev) cardClass += ` ${styles.adjacentCard} ${styles.left}`;
              if (isNext)
                cardClass += ` ${styles.adjacentCard} ${styles.right}`;

              const isVisible = isCurrent || isPrev || isNext;
              if (!isVisible) return null;

              return (
                <div key={testimonial.id} className={cardClass}>
                  <div className={styles.testimonialContent}>
                    <FaQuoteRight className={styles.quoteIcon} />
                    <p className={styles.quote}>{testimonial.quote}</p>
                    <div className={styles.testimonialAuthor}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={styles.authorImage}
                      />
                      <div className={styles.authorInfo}>
                        <h4 className={styles.authorName}>
                          {testimonial.name}
                        </h4>
                        <p className={styles.authorRole}>
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <FaChevronRight className={styles.navIcon} />
          </button>
        </div>

        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.activeIndicator : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
