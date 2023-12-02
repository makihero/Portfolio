import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { BrowserRouter as Router } from "react-router-dom";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";

export const Projects = () => {

    const projects = [
        {
          id: 1,
          title: "API Movie App",
          description: "Design & Development",
          imgUrl: projImg1,
          url:"https://movie-app-snowy-zeta.vercel.app/"
        },
        {
          title: "API Pokedex App",
          description: "Design & Development",
          imgUrl: projImg2,
          url:"https://pokedex-beryl-kappa.vercel.app/"
        },
        {
          title: "Deezer Clone",
          description: "Design & Development",
          imgUrl: projImg3,
          url:"https://deezer-clone-ashy.vercel.app/"
        },
        {
          title: "API Pokemon Evolution",
          description: "Design & Development",
          imgUrl: projImg4,
          url:"https://pokemon-evolutions-nvbp.vercel.app/"
        },
        {
          title: "DuckHunt Game",
          description: "Design & Development",
          imgUrl: projImg5,
          url:"https://duck-hunt-zeta.vercel.app/"
        },
        {
          title: "Google Clone",
          description: "Design & Development",
          imgUrl: projImg6,
          url:"https://clone-google-one-kappa.vercel.app/"
        },
      ];

      const projectsTwo = [
        {
          title: "Batabit",
          description: "Design & Development",
          imgUrl: projImg7,
          url:"https://batabit-two.vercel.app/"
        },
        {
          title: "Food Web",
          description: "Design & Development",
          imgUrl: projImg8,
          url:"https://project-food-eosin.vercel.app/"
        },
        {
          title: "Calculator",
          description: "Design & Development",
          imgUrl: projImg9,
          url:"https://calculator-js-pi.vercel.app/"
        },
        {
          title: "App Web",
          description: "Design & Development",
          imgUrl: projImg10,
          url:"https://web-tributo-theta.vercel.app/"
        }
      ]

    return (
      <Router>
                <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" >
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index} {...project} />
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <Row>
                                    {projectsTwo.map((projectsTwo, index) => {
                                        return (
                                            
                                            <ProjectCard key={index} {...projectsTwo} />
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""/>
        </section>
      </Router>
    );
}