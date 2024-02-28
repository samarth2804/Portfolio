import React, { useContext, useRef, useState } from "react";
import "./Contact.css";

import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState({});

  const onFormChange = (e)=>{
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        [e.target.name]:e.target.value
      }
    });
  }


  const sendEmail = (e) => {
    e.preventDefault();
    const emailAnchor = document.createElement('a');
    emailAnchor.setAttribute('href',`mailto:anandverma2804@gmail.com?subject=Connection from Portfolio!&body=${formData.message}`);
    emailAnchor.click();
    console.log("sent");
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name" onChange={(e)=>onFormChange(e)}/>
          <input type="email" name="user_email" className="user" placeholder="Email" onChange={(e)=>onFormChange(e)}/>
          <textarea name="message" className="user" placeholder="Message" onChange={(e)=>onFormChange(e)}/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
