import React from "react";
import ContactDiv from "./styles.js";
import Pin from "../../img/pin.png";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin-logo.png";

function Contact() {
  return (
    <ContactDiv>
      <h1>Contact me!</h1>
      <h4>
        If you want to know more about me, tell me something is wrong with this
        website, give me some feedback about this or you just want to talk, feel
        free to email me or send a DM on LinkedIn!
      </h4>
      <div className="contactDiv">
        <div className="contactInfo">
          <img src={Pin} alt="Pin" height="30" width="30" />
          <h4>Punta Alta, Buenos Aires, Argentina.</h4>
        </div>
        <div className="contactInfo tag">
          <img src={Email} alt="email" height="30" width="30" />
          <a href="mailto:leaa.marrocchi@gmail.com?">
            <h4>leaa.marrocchi@gmail.com</h4>
          </a>
        </div>
        <div className="contactInfo tag">
          <img src={LinkedIn} alt="linkedIn" height="30" width="30" />
          <a href="https://www.linkedin.com/in/leandro-marrocchi-18b0471a0/">
            <h4>Leandro Marrocchi</h4>
          </a>
        </div>
      </div>
    </ContactDiv>
  );
}

export default Contact;
