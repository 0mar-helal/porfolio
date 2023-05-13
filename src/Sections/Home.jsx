import { Col, Container, Row } from "react-bootstrap";
import resume from "../CV/Omar_Helal.pdf";
import Hi from "../Images/hii.png";
import TypeWriter from "../Components/TypeWriter/TypeWriter";

const Home = () => {
    return ( 
        <div id="home" fluid className="home-section">
            {/* stars  */}
            <div id="orange-star" className="star star-org"></div>
            <div id="purple-star" className="star star-pur"></div>
            <Container className="home-container">
            <Row className='home-content'>
                <Col md={8} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                    </span>
                </h1>

                <h1 className="heading-name">
                    I'M
                    <strong className="main-name"> Omar Helal</strong>
                </h1>

                <div style={{ paddingTop: 50, paddingBottom:50,marginBottom:"30px", textAlign: "left" }}>
                    <TypeWriter />
                </div>

                <a 
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="download-cv"
                download="Omar_Helal.pdf"
                >
                    Download My CV
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="download-icon">
                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                    </svg>

                </a>
                </Col>

                <Col data-aos="fade-left" className='image-col' md={4} style={{ paddingBottom: 20 }}>
                    <div className="image-holder">
                        <img src={Hi} className="hi-image" alt="" srcset="" />
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default Home;