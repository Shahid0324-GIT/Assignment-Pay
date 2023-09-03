import { destinations } from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./index.css";

const Destinations = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: destinations.length,
    slidesToSCroll: destinations.length,
  };
  return (
    <>
      <h1>our destinations.</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {destinations.map((destination) => {
            const { id, img, alt } = destination;
            return (
              <div key={id} className="destination-card">
                <img src={img} alt={alt}></img>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Destinations;
