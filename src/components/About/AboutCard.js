import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivam Upadhyay </span>
            from <span className="purple"> Bhabua,Bihar, India.</span>
            <br /> I am a pre final year student pursuing BTech from <span className="purple">NIT Raipur </span> in Information Technology
            <br />
            Additionally, I am a 3⭐ Coder on CodeChef(Rating: 1639) and also have  1675(Rating) on LeetCode.
            <br />
            <br />
            Apart from coding, some other activities that I love to do like I am currently  working as a Coordinator in Innovation Cell, NIT Raipur.
          </p>
          <br/>
          <p>I also Love to do some activities such as: </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shivam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
