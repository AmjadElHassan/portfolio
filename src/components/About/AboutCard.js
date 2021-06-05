import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amjad Elhassan </span>
            from <span className="purple"> Khartoum, Sudan.</span><br />
            <br />I studied BioChemistry at the University of North Carolina <br /> (GO TARHEELS) and currently run Puffin Design Lab, a Tech Consultancy, where I lead a team of Devs and Designers in completing tech-centric projects for local companies and organizations.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Digital Illustration
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditation
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amjad Elhassan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
