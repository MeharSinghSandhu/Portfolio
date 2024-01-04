import {Container , Col , Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import C from "../assets/icons8-c-programming.svg";
import Python from "../assets/python.svg";
import Java from "../assets/icons8-java-logo.svg";
import mySQL from "../assets/icons8-mysql.svg";
import assembly from "../assets/easy68K.webp";
import html_logo from "../assets/icons8-html-logo.svg";
import css_logo from "../assets/icons8-css-logo.svg";
import react_logo from "../assets/icons8-react.svg";
import js_logo from "../assets/icons8-javascript.svg";
import colorSharp from "../assets/color-sharp.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>Aspiring software developer with a diverse skill set in programming (C, Python, Java), web technologies (HTML, CSS, JavaScript, React), and system proficiency (Linux, Windows). Embraces Agile methodologies and excels in development tools like Git, GitHub, and GitLab. Passionate about building efficient, scalable solutions and advancing the frontier of tech innovation.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src = {C} alt="hello"/>
                            <h5>C</h5>
                        </div>
                        <div className="item">
                            <img src = {Python} alt="hello"/>
                            <h5>Python</h5>
                        </div>
                        <div className="item">
                            <img src = {Java} alt="hello"/>
                            <h5>Java</h5>                  
                        </div>
                        <div className="item">
                            <img src = {mySQL} alt="hello"/>
                            <h5>mySQL</h5>
                        </div>
                        <div className="item">
                            <img src = {assembly} alt="hello"/>
                            <h5>68k assembly</h5>
                        </div>
                                             
                        <div className="item">
                            <img src = {html_logo} alt="hello"/>
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                            <img src = {css_logo} alt="hello"/>
                            <h5>CSS</h5>
                        </div>
                        <div className="item">
                            <img src = {react_logo} alt="hello"/>
                            <h5>React</h5>
                        </div>
                        <div className="item">
                            <img src = {js_logo} alt="hello"/>
                            <h5>JavaScript</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp}/>
    </section>
  )
}
