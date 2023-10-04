import { Container, Row, Col, Image } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import "./info.css";
import { useContext } from "react";
import { DataContext } from "../../App";

const Info = () => {
  const { aboutData } = useContext(DataContext);
  return (
    <Container fluid className="about-section">
      <Row className="about-content">
        <Col data-aos="fade-right" md={8} className="about-description">
          <p
            className="about-body"
            dangerouslySetInnerHTML={{ __html: aboutData?.text_en }}
          ></p>
          {/* <p>{data?.text_en}</p> */}
        </Col>
        <Col data-aos="fade-left" md={4} className="myAvtar">
          <Tilt>
            <Image src={aboutData?.image} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
