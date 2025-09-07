import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import homeLogo from "../../Assets/home.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I AM
                <strong className="main-name"> HARSHADH JEYAPRAKASH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
     <section className="hero-section" style={{ background: "#172a45", color: "#64ffda", padding: "60px 0", textAlign: "center" }}>
        <Container>
          <h2 style={{ fontWeight: "bold", fontSize: "2.5rem", marginBottom: "20px" }}>
            Welcome to My Portfolio
          </h2>
          <p style={{ fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto" , color: "white"}}>
            I'm Harshadh Jeyaprakash, a passionate developer eager to build impactful digital experiences. Explore my projects, skills, and let's connect to create something amazing together!
          </p>
        </Container>
      </section>
       
    </section>
  );
}

export default Home;
