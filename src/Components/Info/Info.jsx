import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import like from "../../Images/like.png"
import "./info.css";

const Info = () => {
    return ( 
        <Container fluid className="about-section">
            <Row className="about-content">
                <Col data-aos="fade-right" md={8} className="about-description">
                    <p className="about-body">
                    Experienced Frontend Web Developer from Syria,Latakia with expertise in <i><b className="purple">ReactJS</b></i>. I have over +2 years of experience building top-quality websites and web applications. My skills include proficiency in <i><b className="purple">Redux</b></i> and <i><b className="purple">Tailwind CSS</b></i>, as well as staying up-to-date with the latest trends and technologies in frontend development.
                    <br />
                    <br />
                    With my attention to detail and good <i><b className="purple">problem-solving</b></i> skills, I ensure that your project is optimized for <i><b className="purple">speed</b></i>, <i><b className="purple">performance</b></i>, and <i><b className="purple">user experience</b></i>. I have a proven track record of delivering functional and aesthetically pleasing websites and web applications, and I believe that <i><b className="purple">collaboration</b></i> and <i><b className="purple">teamwork</b></i> are essential to delivering the best possible results
                    <br />
                    <br />
                    If you're looking for a dedicated and reliable frontend web developer to bring your project to <i><b className="purple">life</b></i>, let's connect and discuss how I can contribute to your <i><b className="purple">success</b></i>
                    </p>
                </Col>
                <Col data-aos="fade-left" md={4} className="myAvtar">
                    <Tilt>
                        <img src={like} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
            </Row>
        </Container>
    );
}

export default Info;