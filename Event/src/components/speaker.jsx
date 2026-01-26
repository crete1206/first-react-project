
import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// importing of image
import speaker1 from "../assets/image-1.jpg";
import speaker2 from "../assets/image-1.jpg";
import speaker3 from "../assets/image-1.jpg";
import speaker4 from "../assets/image-1.jpg";
import speaker5 from "../assets/image-1.jpg";
import speaker6 from "../assets/image-1.jpg";
import speaker7 from "../assets/image-1.jpg";
import speaker8 from "../assets/image-1.jpg";
import speaker9 from "../assets/image-1.jpg";

const speakerSlides= [
  {
  speakers:[
    {image: speaker1, name:"Ayodeji Balogun", role:"Artiste"},
    {image: speaker2, name:"Peter Obi", role:"Politician"},
    {image: speaker3, name:"Victor Osimehn", role:"Athlete"}
  ] 
},
  {
  speakers:[
    {image: speaker4, name:"Ayodeji Balogun", role:"Artiste"},
    {image: speaker5, name:"Peter Obi", role:"Politician"},
    {image: speaker6, name:"Victor Osimehn", role:"Athlete"}
  ] 
},
  {
  speakers:[
    {image: speaker7, name:"Ayodeji Balogun", role:"Artiste"},
    {image: speaker8, name:"Peter Obi", role:"Politician"},
    {image: speaker9, name:"Victor Osimehn", role:"Athlete"}
  ] 
},
]



const speaker = () => {
  return (
    <Carousel>
        {speakerSlides.map((slide, index) =>(
            <Carousel.Item key={index}>
                <Container>
                    <Row className='g-4'>

                    {slide.speakers.map((speaker, idx) =>(

                        <Col key={idx}>
                        <section>
                            <img src={speaker.image} className='img-fluid'/>

                            <div className='speaker-overlay d-flex flex-column justify-content align-items-center text-white'></div>

                            <main>
                                <h5>{speaker.name}</h5>
                                <p>{speaker.role}</p>
                            </main>

                        </section>


                        </Col>


                    ))}



                    </Row>




                </Container>




            </Carousel.Item>



        ))}
    </Carousel>
  )
}

export default speaker