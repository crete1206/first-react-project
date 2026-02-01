import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// importing of image
import speaker1 from "../assets/speakers/wizkid.jpg";
import speaker2 from "../assets/speakers/peter obi.jpg";
import speaker3 from "../assets/speakers/osimhen.jpg";
import speaker4 from "../assets/speakers/nons.jpg.jpeg";
import speaker5 from "../assets/speakers/tony.jpg.jpeg";
import speaker6 from "../assets/speakers/Desmond.jpg.jpeg";

const speakerSlides = [
  {
    speakers: [
      { image: speaker1, name: "Ayodeji Balogun", role: "Artiste" },
      { image: speaker2, name: "Peter Obi", role: "Politician" },
      { image: speaker3, name: "Victor Osimehn", role: "Athlete" },
    ],
  },
  {
    speakers: [
      { image: speaker4, name: "Nons Miraj", role: "Influencer" },
      { image: speaker5, name: "Tony Elumelu", role: "Entrepeneur" },
      { image: speaker6, name: "Desmond Elliot", role: "Politician" },
    ],
  },
  
];

const Speaker = () => {
  return (
    <>
      <section>
        <h1> Meet the Speaker</h1>
        <p>Inspiring Experience, Bold Ideals. Catalyst with the difference</p>
      </section>
      <Carousel interval={3500} pause={false} indicators={false}>
        {speakerSlides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Container>
              <Row className="g-4">
                {slide.speakers.map((speaker, idx) => (
                  <Col md={4} key={idx}>
                    <div className="speaker-card">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="speaker-img"
                      />

                      <div className="speaker-overlay"></div>

                      <div className="speaker-info">
                        <h5>{speaker.name}</h5>
                        <span>{speaker.role}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Speaker;
