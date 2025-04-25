import About from "../components/About";
import Contact from "../components/Contact";
import Estimations from "../components/Estimations";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Solutions from "../components/Solutions";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Solutions />
      <Estimations />
      <Projects />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
