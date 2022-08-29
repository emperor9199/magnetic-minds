import React from "react";
import {
  SendOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./Footer.css";
import "../../App.css";
import FooterConnect from "../../assets/FooterImages/FooterConnect.svg";

function Footer() {
  return (
    <div className="footer-container flex-class-column-direction">
      <div className="connect-us-section flex-class">
        <div className="connect-us-email-section">
          <h4 className="get-in-touch-title">Let's Get In Touch</h4>
          <div>
            <input
              type="text"
              placeholder="Enter your Email"
              className="get-in-touch-input"
            />
            <SendOutlined className="get-in-touch-icon" />
          </div>
        </div>
        <div className="connect-us-image ">
          <img
            src={FooterConnect}
            alt="Footer-Connect"
            className="footer-connect-us-image"
          />
        </div>
      </div>

      <div className="social-handles-and-about flex-class">
        <div className="social-handles-about common-footer-sub-div">
          <div className="social-handles-about-title">Magnetic Minds</div>
          <div className="animated-line" />
          <ul className="no-list-style flex-class">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              recusandae sapiente animi suscipit veritatis consequuntur? uid hic
              soluta non repellendus{" "}
            </li>
          </ul>
        </div>
        <div className="social-handles-common-pages common-footer-sub-div common-flex-for-center-column">
          <div>
            <div className="social-handles-about-title">Links</div>
            <div className="animated-line" />
            <ul className="no-list-style">
              <li>About</li>
              <li>Contact Us</li>
              <li>Service</li>
            </ul>
          </div>
        </div>
        <div className="social-handles-pages common-footer-sub-div common-flex-for-center-column">
          <div>
            <div className="social-handles-about-title">policy</div>
            <div className="animated-line" />
            <ul className="no-list-style">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="social-handles-icon common-footer-sub-div common-flex-for-center-column">
          <div>
            <div className="social-handles-about-title">Let's Chat!</div>
            <div className="animated-line" />
            <ul className="no-list-style flex-class social-icon-list">
              <li>
                <InstagramOutlined
                  style={{
                    fontSize: "1.3rem",
                    color: "#8a3ab9",
                  }}
                />
              </li>
              <li>
                <TwitterOutlined
                  style={{
                    fontSize: "1.3rem",
                    color: "#1DA1F2",
                  }}
                />
              </li>
              <li>
                <FacebookOutlined
                  style={{
                    fontSize: "1.3rem",
                    color: "#4267B2",
                  }}
                />
              </li>
              <li>
                <MailOutlined
                  style={{
                    fontSize: "1.3rem",
                    color: "#3e65cf",
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
