import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <img src={logo} alt="Logo"></img>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ruben-callejas/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100087840025396">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://wa.me/573152046924">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="https://github.com/makihero?tab=repositories">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
