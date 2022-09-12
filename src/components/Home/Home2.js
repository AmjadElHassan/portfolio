import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO<span className="purple"> RE-INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Just a biochemist who found the truth of his life wrapped inside an h1 tag.<br></br><br></br> I am a lead FullStack Node Programmer working as the CTO and founder of the tech consultancy: <a href='https://puffindesignlab.com'><b className="purple">Puffin Design Lab.</b></a> <br></br><br></br>
            ...but at the end of the day, what I really am is a kid from Virginia just looking for his next big project! Check out the latest software i'm working on at my  
            <a target='_blank' href='https://github.com/amjadelhassan'><b className="purple"> github</b></a>! find my latest art pieces on <a href="https://instagram.com/bloopysoup"><b className="purple"> instagram</b></a> or read my latest <a href="https://codemonkeycove.herokuapp.com/"><b className="purple"> web development articles/tutorials!</b></a> Have fun exploring and thanks for stopping by!

              
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AmjadElhassan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AmjastPlayin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amjadelhassan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bloopysoup/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
