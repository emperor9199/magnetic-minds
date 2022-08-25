import React from "react";
import "./Footer.css";
import FooterConnect from "../../assets/FooterImages/FooterConnect.svg";

function Footer() {
  return (
    <div className="footer-container">
        
        <div className="connect-us-section">
            <div className="connect-us-email-section">
                <h4>Let's Get In Touch</h4>
                <input type="text" placeholder="Enter your Email"/>
            </div>
            <div className="connect-us-image">
                <img src={FooterConnect} alt="Footer-Connect" />
            </div>
        </div>
        
        <div className="social-handles-and-about">
            <div className="social-handles-about">
                <div classname="social-handles-about-title"></div>
                <div classname="social-handles-about-content"></div>
            </div>
            <div className="social-handles-common-pages">
                <ul>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Service</li>
                </ul>
            </div>
            <div className="social-handles-pages">
                <ul>
                    <li>Terms &nbps; Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
            <div className="social-handles-icon">
                <div>Let's Chat!</div>
                <ul>
                    <li>Instagram</li>
                    <li>Tweeter</li>
                    <li>Facebook</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;