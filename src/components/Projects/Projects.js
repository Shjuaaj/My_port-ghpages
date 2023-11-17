import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import QuizGame from "../../Assets/Projects/QuizGame.jpg";

import toDoList from "../../Assets/Projects/toDoList.jpg";
import CuurencyConv from "../../Assets/Projects/CuurencyConv.png";
import drumKit from "../../Assets/Projects/drumKit.jpg";
import weather_app from "../../Assets/Projects/weather_app.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CuurencyConv}
              isBlog={false}
              title="Currency Converter"
              description="Introducing our sleek Currency Converter App, crafted with ReactJS, HTML, and CSS. This dynamic tool leverages API fetching for real-time exchange rates, ensuring accurate and up-to-date conversions. "
              ghLink="https://github.com/Shjuaaj/currConvo"
              demoLink="https://shjuaaj.github.io/currConvo/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather_app}
              isBlog={false}
              title="Weather App"
              description="Experience real-time weather updates with our ReactJS-powered Weather App. Meticulously crafted using HTML and CSS, it seamlessly integrates API fetching to deliver accurate forecasts for the next five days. The intuitive design ensures easy navigation, providing a comprehensive view of weather conditions on any device."
              ghLink="https://github.com/Shjuaaj/weather-ghpages"
              demoLink="https://shjuaaj.github.io/weather-ghpages/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDoList}
              isBlog={false}
              title="To-Do List"
              description="Meet our To-Do List App, expertly crafted with ReactJS, HTML, CSS, and JavaScript. . Experience the convenience of local storage integration, securely storing your tasks permanently. Effortlessly add, update and delete to-dos in real time."
              ghLink="https://github.com/Shjuaaj/to-dolist"
              demoLink="https://shjuaaj.github.io/to-dolist/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizGame}
              isBlog={false}
              title="Quiz Hub"
              description="Embark on a knowledge journey with our Quiz Game App, skillfully developed with HTML, CSS, and JavaScript. Dive into diverse domains with a variety of quizzes, engaging users in a fun and educational experience. Immerse yourself in interactive challenges, enhancing your expertise across different subjects. "
              ghLink="https://github.com/Shjuaaj/MyQuizWorld.github.io"
              demoLink="https://shjuaaj.github.io/MyQuizWorld.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumKit}
              isBlog={false}
              title="Drum Kit App"
              description="Unleash your rhythm with our Drum Kit App, expertly crafted in HTML, CSS, and JavaScript. Experience the joy of percussion as each element produces unique sounds upon interaction. The visually appealing design ensures an immersive drumming experience, making it easy for users to create music effortlessly."
              ghLink="https://github.com/Shjuaaj/dkittt.github.io"
              demoLink="https://shjuaaj.github.io/dkittt.github.io/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
