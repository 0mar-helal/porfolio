import { Col, Row } from "react-bootstrap";
import "./skills.css";
import Html5 from "../../Images/html5.svg"
import Css3 from "../../Images/css3.svg"
import Js from "../../Images/js.svg"
import Sass from "../../Images/sass.svg"
import JQuery from "../../Images/jquery.svg"
import Bootstrap from "../../Images/bootstrap.svg"
import Tailwindcss from "../../Images/tailwindcss.svg"
import Reactjs from "../../Images/reactjs.svg"
import Nextjs from "../../Images/nextjs.svg"
import Typescript from "../../Images/typescript.svg"
import Redux from "../../Images/redux.svg"
import MUI from "../../Images/material-ui.svg"
import Git from "../../Images/git.svg"
import Github from "../../Images/github.svg"

const Skills = () => {
    return ( 
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Html5} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Css3} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Js} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Typescript} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Sass} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={JQuery} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Bootstrap} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Tailwindcss} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Reactjs} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Nextjs} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Redux} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={MUI} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Git} alt="" width="80%" />
            </Col>
            <Col data-aos="fade-up" xs={5} md={2} className="skill-icon">
                <img src={Github} alt="" width="80%" />
            </Col>
        </Row>
    );
}

export default Skills;