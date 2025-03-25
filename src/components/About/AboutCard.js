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
            currently living in <span className="purple"> Arlington, Va.</span><br />

            <br />I studied BioChemistry at the University of North Carolina <br /> (GO TARHEELS) and currently work as a senior front-end leaning full stack developer at the National Institute of Health.
            <br /> I managed and worked on multiple applications to aid in health research which include applications that assess x-rays for tuberculosis, create and manage complicated genomic information with GRIS, and created a codebase to provide 3d and 2d assets to the greater scientific community with NIH3D and Bioart!
            <br /> These client are typically written in Typescript, React.js, material Ui, Next.Js, Vue.Js, Redux, and PHP.
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
