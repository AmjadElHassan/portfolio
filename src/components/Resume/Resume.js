import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Founder/Node Developer at Puffin Design Lab"
              date="mar 2020 - July 2021"
              content={[
                "Responsible for managing and training a team of engineers and designers in completing technical projects for Client companies.",
                " Deployed FullStack E-commerce applications and websites via Amazon Web Service (BeanStalk) and Heroku.",
                "Updated and created existing databases with GraphQL query interfaces to produce more efficient, and pertinent application results."
              ]}
            />
            <Resumecontent
              title="Senior Full Stack Engineer at ClassDojo"
              date="August 2021 - present"
              content={[
                "Created, Managed, and collaborated on creating a new optimized, and high quality iteration of the classdojo application for Android",
                "Primarily focused on creating intuitive UI interactions of a react application running on Next.JS wrapped in a flutter handler",
                "trained new junior engineers and created high quality documentation on complicated aspects of the project",
                "Adept at guaranteeing effective Test-Driven development using Jest, Cypress, and Playwright",
                "Worked directly with product team and designers to create a human-first intuitive approach to front-end client"
              ]}
            />

            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor of Science: Biochemistry "
              date="2014 - 2018"
              content={[` UNC-Chapel Hill`]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]} */}
            {/* /> */}
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
