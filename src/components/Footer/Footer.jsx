import React from "react";
import { SendOutlined } from "@ant-design/icons";
import "./Footer.css";
import "../../App.css";
import FooterConnect from "../../assets/FooterImages/FooterConnect.svg";

function Footer() {
  return (
    <div className="footer-container flex-class-column-direction">
        
        <div className="connect-us-section flex-class">
            <div className="connect-us-email-section">
                <h4>Let's Get In Touch</h4>
                <div>
                    <input type="text" placeholder="Enter your Email"/>
                    <SendOutlined />
                </div>
            </div>
            <div className="connect-us-image ">
                <img src={FooterConnect} alt="Footer-Connect" className="footer-connect-us-image"/>
            </div>
        </div>
        
        <div className="social-handles-and-about flex-class">
            <div className="social-handles-about">
                <div classname="social-handles-about-title">Magnetic Minds</div>
                <div classname="social-handles-about-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis recusandae sapiente animi suscipit veritatis consequuntur? uid hic soluta non repellendus </div>
            </div>
            <div className="social-handles-common-pages">
                <ul className="no-list-style">
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Service</li>
                </ul>
            </div>
            <div className="social-handles-pages">
                <ul className="no-list-style">
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
            <div className="social-handles-icon">
                <div>Let's Chat!</div>
                <ul className="no-list-style flex-class">
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