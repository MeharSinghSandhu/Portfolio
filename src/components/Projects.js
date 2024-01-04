import {Container , Col , Tab , Row , Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/color-sharp2.png";
import projImg1 from "../assets/netflix.svg"
import projImg2 from "../assets/USAnalysis.jpg"
import projImg3 from "../assets/profile.png"
import projImg4 from "../assets/retro.png"
import projImg5 from "../assets/library.png"



export const Projects = () => {
    const projects = [
        {
            title:"Netflix UI(HTML,CSS)",
            description: "This project involved constructing the Netflix front-end interface. It's built with HTML and CSS, focusing on layout structure and responsive design for various devices.",
            imgUrl: projImg1,
        },
        {
            title:"USAnalysis(Python)",
            description: "A collaboratively developed comprehensive tool that sifts through extensive U.S. name databases from the 1800s to the present, offering insightful analytics on naming trends, ratios, and patterns with state-specific data, complemented by visual graphs for better understanding and analysis.",
            imgUrl: projImg2,

        },
        {
            title:"proFile(C)",
            description: "This project implements a linked list data structure to manage employee records efficiently, allowing operations like hiring and termination to be handled with ease. It maintains an organized record of current and past employees, ensuring swift access and management of personnel data.",
            imgUrl: projImg3,

        },
        {
            title:"Retro Game Store(HTML , CSS)",
            description: "A nostalgic 8 bit themed web store crafted in HTML and CSS, offering a unique collection of hard-to-find, iconic retro games. This site not only serves as a gateway to classic gaming but also showcases a user-friendly interface and vintage design aesthetics, rekindling the charm of old-school gaming.",
            imgUrl: projImg4,

        },
        {
            title:"Library Record Keeper(Python,mySQL)",
            description: "A collaborative project developed using Python and MySQL, designed to streamline the management of library inventories. This application efficiently tracks issued books, return dates, and available titles, simplifying the process of library record-keeping and enhancing user accessibility to book collections.",
            imgUrl: projImg5,

        },

    ];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <br/>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first"></Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                                Tab Three
                            </Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey = "first">
                            <Row>
                                {
                                    projects.map((project, index)=>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />                                           
                                        )
                                    })
                                }                                
                            </Row>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane> */}

                    </Tab.Content>
                    </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src = {colorSharp2} alt="img"></img>
        </section>
    )
}