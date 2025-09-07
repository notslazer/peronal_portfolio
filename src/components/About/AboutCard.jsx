import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            This is <span className="purple">Harshadh Jeyaprakash </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently a student at Vellore Institute Of Technology, Chennai.
            <br />
            I am doing B.Tech in Computer Sceince Engineering.
            <br />
            <br />
            Apart from coding, I love to
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
