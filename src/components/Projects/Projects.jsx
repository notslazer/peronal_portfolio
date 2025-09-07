import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import chatroom from "../../Assets/Projects/chatroom.png";
import netflix from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatroom}
              isBlog={false}
              title="ChatRoom"
              description="Personal Chat Room or Space to share anything. Have features which allows user to message, share image as well as  reaction on messages."
              ghLink="https://github.com/notslazer"
              demoLink="https://linkedin.com/in/harshadh-jeyaprakash"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netlflix Clone"
              description="A full stack Netflix Clone built using React, Redux & Firebase. It has features like user authentication, movie searching and filtering, and a responsive design that works on both desktop and mobile devices."
              ghLink="https://github.com/notslazer/netflix-clone"
              demoLink="https://linkedin.com/in/harshadh-jeyaprakash"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="A Python-based project that uses OpenCV and deep learning to detect faces and recognize emotions in real-time from webcam input or images. It can classify emotions such as happy, sad, angry, surprised, and neutral."
              ghLink="https://github.com/notslazer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
