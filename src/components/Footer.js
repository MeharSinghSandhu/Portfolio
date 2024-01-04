import { Container, Row, Col } from "react-bootstrap";  
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/icons8-github.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <h2>Mehar Singh</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <br/>
              <a href="https://www.linkedin.com/in/mehar-singh-sandhu-7a1896243/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/MeharSinghSandhu"><img src={navIcon2} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}