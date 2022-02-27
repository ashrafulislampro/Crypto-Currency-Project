import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import logo3 from "../../images/Medium.png";

import "./Header.css";

const Header = () => {
  return (
    <section className="header-section">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className="header_text">
              <h6>Welcome to</h6>
              <h3>
                PoorToRich Decentralized Marketplace Combined Blockchain and
                Artificial Intelligence to Increase your Profits While
                Minimizing Risk on the BSC
              </h3>
              <p className="mt-3">
                Earn Passive Income Daily and Monthly with Our Combined Defi &
                Al{" "}
                <p>
                  Financial Tools and Diversify your Investment portfolio fully
                  Automated.
                </p>
              </p>
            </div>
            <div>
              <button className="buy">Buy Now</button>
              <button className="launch">Launch App</button>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}></Col>
        </Row>
        <div className="icons-parent-grd">
          <div className="icons-parent">
            <BsFacebook className="icons" />
            <AiOutlineTwitter className="icons" />
            <FaPaperPlane className="icons" />
            <img className="img-fluid icons" src={logo3} alt="" />
            <BsYoutube className="icons" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
