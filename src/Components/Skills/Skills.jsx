import { Col, Row } from "react-bootstrap";
import "./skills.css";
import { useContext } from "react";
import { DataContext } from "../../App";

const Skills = () => {
  const { skillsData } = useContext(DataContext);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skillsData?.map((skill) => (
        <Col
          key={skill.id}
          data-aos="fade-up"
          xs={5}
          sm={4}
          md={3}
          lg={2}
          className="skill-icon"
        >
          <img src={skill?.photo} alt="" width="80%" />
        </Col>
      ))}
    </Row>
  );
};

export default Skills;
