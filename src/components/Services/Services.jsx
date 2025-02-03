import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span id="skk" style={{ color: darkMode ? "white" : "" }}>Skills & Technical Abilities</span>
        <span id="sk">Check Out My Skills</span>
        <span id="description">
          Enthusiastic Developer
          <br />
          Having experience in frontend and backend tech stacks
        </span>
        <a href="https://drive.google.com/file/d/14VoCYDVkIV2vDXdEXlLnw3RbwFhQ0lVG/view?usp=drive_link" target="_blank" rel="noreferrer">
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Languages & Databases"}
            detail={"Java, Python, C/C++, JavaScript, MySQL, PostgreSQL, MongoDB, Redis"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Framework & Libraries"}
            detail={"Spring Boot, Hibernate ORM, Liquibase, J2EE, JUnit, Mockito, RESTful APIs, GraphQL, SOAP, gRPC, React.js, Redux, Bootstrap"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Tools & Technologies"}
            detail={
              "Git/GitHub, Unix/Linux, Docker, Jenkins, Maven, IntelliJ IDEA, VS Code, Postman, Azure DevOps, AWS (EC2, S3, Lambda, DynamoDB), Apache Kafka, RabbitMQ"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
