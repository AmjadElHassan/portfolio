import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import canvasCover from "../../Assets/Projects/canvasCover.png";
import chatify from "../../Assets/Projects/chatify.jpg";
import apiCover from "../../Assets/Projects/apiCover.jpg";
import mikael from "../../Assets/Projects/whatev.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="loqulii"
              description="Loqulii is a social media platform that will allow users the ability to connect directly with with the social media posts and upcoming events in their local area. Inspration for this app centers around encouraging and easing integration back into our communities as Covid restrictions begin to ease."
              link="https://loqulii.herokuapp.com/"
            />
                    <p style={{ color: "white" }}>
          latest update: chat functionality
        </p>
          </Col>
        </Row>
        {/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my articles</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={canvasCover}
              link="https://codemonkeycove.com/designing-your-own-html-canvas-button-system/"
              title="MODULAR PROGRAMMING FOR TEAMWORK: Designing an effective button system for canvas applications"
              site="codemonkeycove.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={apiCover}
              link="https://codemonkeycove.herokuapp.com/a-crash-course-on-restful-api-using-the-new-rsc-chemspider-api/"
              title="A CRASH COURSE ON RESTFUL API USING THE NASA APOD AND RSC CHEMSPIDER API"
              site="codeMonkeyCove.com"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Professional <strong className="purple">Testimonials </strong>
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my clients reviews</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={mikael}
              link="https://www.linkedin.com/in/mikael-rehman-44a326104/"
              title="Incredibly knowledgeable but broke things down so my team and I could understand easily. Originally we had done everything internally but when we had reached a standstill on progress for our website we reached out and Amjad was there to guide us."
              site="
              Marketing Director of Atlantic Coast Cotton"
            />
          </Col>
          <Col md={4} className="blog-card">
            {/* <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            /> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
