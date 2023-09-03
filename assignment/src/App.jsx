import Destinations from "./components/Destinations/Destinations";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Opinion from "./components/Opinion/Opinion";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Hero />
      </section>
      <section className="review-section">
        <Opinion />
      </section>
      <section className="destination-section">
        <Destinations />
      </section>
    </>
  );
};

export default App;
