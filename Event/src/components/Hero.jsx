import Carousel from "react-bootstrap/Carousel";

// importing of image
import slide1 from "../assets/image-1.jpg";
import slide2 from "../assets/image-2.jpg";
import slide3 from "../assets/image-3.jpg";
const slides = [
  {
    image: slide1,
    title: "catalyst x confrence",
    description:
      "A premier conference bringing together leaders, innovators, creators, and professionals shaping the future of Africa.",
  },

  {
    image: slide2,
    title: "Igniting Innovation. Driving Impact.",
    description:
      "Experience insightful talks, strategic panels, and practical sessions designed to spark growth, leadership, and transformation.",
  },

  {
    image: slide3,
    title: "Africa’s Next Moves Start Here",
    description:
      "Catalyst X Conference is the meeting point for those ready to create solutions, scale ideas, and influence the future.",
  },
];

function Hero() {
  return (
    <Carousel fade data-bs-ride="carousel" interval={3000}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className="slider">
          <img src={slide.image} alt={slide.title} />
          <div className="overlay"></div>
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;
