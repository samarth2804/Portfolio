import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/surveyaan-icon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import Angular from '../../img/Velocity-app.png';
import Firebase from '../../img/firebase-icon.png';
import Python from '../../img/python-icon.png';
import GCP from '../../img/g-cloud-icon.png';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Personal Projects
          </span>
          <span>See My Work in Action</span>

          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="project w-secCircle">
          <a href="https://github.com/samarth2804/Scalable-E-Pharmacy-Platform-with-Microservices-Integration" target="_blank"> &nbsp; E-Pharmacy &nbsp; App </a>
          </div>
          <div className="project w-secCircle">
          <a href="https://github.com/samarth2804/AI-ChatBot" target="_blank" > &nbsp; &nbsp; &nbsp; &nbsp; AI &nbsp; &nbsp; &nbsp; &nbsp; Chat Bot </a>    
          </div>
          <div style={{background: "#1949b8", color: "white" }} className="project w-secCircle">
          <a href="https://github.com/samarth2804/Log-Ingestor-and-Query-Interface" target="_blank">
            Log Ingestor
          </a>
          </div>{" "}
          <div className="project w-secCircle">
            <a href="https://github.com/samarth2804/AI-Enhanced-Database-Interaction-Tool" target="_blank">Query Generator & Analyzer</a>
          </div>
          <div className="project w-secCircle">
            <a href="https://github.com/samarth2804/Velocity-Estate" target="_blank"> &nbsp; &nbsp;Velocity &nbsp; &nbsp; Estate</a>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
