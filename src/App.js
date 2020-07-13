import React from 'react';
import './App.css';
import LEARN from '../src/assets/images/prework-learn2.png';
import DINE from '../src/assets/images/dinebud.png';
import DEAL from '../src/assets/images/dealnodeal.gif';
import BATTLE from '../src/assets/images/battles.gif';
import CSS from '../src/assets/images/css.svg';
import HTML from '../src/assets/images/html5.svg';
import JS from '../src/assets/images/javascript.svg';
import PSQL from '../src/assets/images/postgresql.svg';
import RAILS from '../src/assets/images/rails.svg';
import RUBY from '../src/assets/images/ruby.svg';
import REACT from '../src/assets/images/react.svg';
import Profile from '../src/assets/images/me-circle.png';
import GIT from '../src/assets/images/git.svg';
import LINKED from '../src/assets/images/linked-circle.svg';
import RES from '../src/assets/images/resume-blue.svg';
import RESUME from '../src/assets/files/resume.pdf';
import GITHUB from '../src/assets/images/github.svg';
import {Row, Col, Card, CardTitle,CardText,CardImg,CardHeader,Button} from 'reactstrap'
import {Navbar,Nav, Image} from 'react-bootstrap'

class App extends React.Component {
  render(){
  return (
      <div className="full-portfolio">
        <div className="header">
          <Row>
            <Col sm={12}>
              <Navbar bg="light" variant="light" className="header">
                  <Nav style={{marginRight:"0px"}}>
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#projects">Projects</Nav.Link>
                      <Nav.Link href="#stack">Tech Stack</Nav.Link>
                  </Nav>
              </Navbar>
            </Col>
          </Row>
        </div>
        <div className="landing">
          <Row className="landingPage" id="home">
            <Col sm={12} md={12}  lg={6} style={{textAlign:"center"}}>
                <Image src={Profile} roundedCircle className="profilePic"/>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Row>
                  <Col>
                      <span className="name">Art Ortega</span>
                  </Col>
              </Row>
              <hr />
              <Row>
                  <Col sm={12}>
                      <p>Hey-yo! I'm a full-stack web developer based out of San Diego. I'm currently seeking job opportunities as a junior developer where I can apply my passion for innovation and technology. When I'm not coding, you'll probably find me on a run, or lost at sea. If you'd like to know more about my professional experience, feel free to download my resume below. Connect with me on LinkedIn as well, I look forward in hearing from you! </p>
                  </Col>
              </Row>
              <hr />
              <Row>
                  <Col>
                    <a href="https://www.linkedin.com/in/art-ortega/" target="_blank"><Image src={LINKED} className="profileIcons"/></a>
                    <a href={RESUME} download><Image src={RES} className="profileIcons" style={{color:"black"}}/></a>
                  </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="project" id="projects">
            <Row>
                <Col sm={12} >
                    <Card body className="cardProject">
                        <CardTitle style={{textAlign:"center"}}><h3>Projects</h3></CardTitle>
                        <Row>
                        <Col sm={12} md={6}>
                            <Card className="cartas">
                            <CardHeader>Battleship</CardHeader>
                            <CardImg top style={{width:"100%"}} src={BATTLE} alt="projectimg" className="cardImg"/>
                            <CardText>Remake of Battleship created using React.js</CardText>
                            <a href="https://github.com/art-ortega/battleship" target="_blank" style={{textAlign:"center"}}><Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}>Github</Button></a>
                            </Card>
                        </Col>
                        <Col sm={12} md={6}>
                            <Card className="cartas">
                            <CardHeader>Deal-No-Deal</CardHeader>
                            <CardImg top style={{width:"100%"}} src={DEAL} alt="projectimg" className="cardImg"/>
                            <CardText>Text-based game created in Ruby</CardText>
                            <a href="https://github.com/art-ortega/deal_or_no_deal" target="_blank" style={{textAlign:"center"}}><Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}>Github</Button></a>
                            </Card>
                        </Col>
                        </Row>
                    <Row>
                        <Col sm={12} md={6}>
                        <Card className="cartas">
                            <CardHeader>Dinebud</CardHeader>
                            <CardImg top style={{width:"100%"}} src={DINE} alt="dinebud image" className="cardImg"/>
                            <CardText>A group project that me and two other individuals created for our capstone. Dinebud is a platform that connects individuals who want to dine with </CardText>
                            <a href="https://dinebud.herokuapp.com/" target="_blank" style={{textAlign:"center"}}><Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}>Live Demo</Button></a>
                            <a href="https://github.com/art-ortega/dinebud" target="_blank" style={{textAlign:"center"}}><Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}>Github</Button></a>
                        </Card>
                        </Col>
                        <Col sm={12} md={6}>
                        <Card className="cartas">
                            <CardHeader>Prework LEARN</CardHeader>
                            <CardImg top style={{width:"100%"}} src={LEARN} alt="preworklearn" className="cardImg"/>
                            <CardText>A project that was assigned during my internship at LEARN Academy. We created a prework curriculum course to prepare future students who plan on attending LEARN. </CardText>
                            <a href="https://learn-prework-frontend.herokuapp.com/" target="_blank" style={{textAlign:"center"}}><Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}href="">Live Site</Button></a>
                            <a href="https://github.com/LEARNAcademy/prework-frontend" target="_blank" style={{textAlign:"center"}}><Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}>Github</Button></a>
                        </Card>
                        </Col>
                    </Row>
                    </Card>
                </Col>
            </Row>
        </div>
        <div className="stack">
        <Row>
            <Col sm={12} md={12}>
                <h3>Tech Stack</h3>
            </Col>
        </Row>
        <Row id="stack">
            <Col sm={12}>
                <Card className="stackCard">
                    <Row className="stackParagraphs">
                        <Col md={6} sm={6} lg={3}>
                            <Row>
                                <Col sm={12}>
                                    <p>HTML</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Image src={HTML} className="stackImg"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} sm={6} lg={3}>
                            <Row>
                                <Col sm={12}>
                                    <p>CSS</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Image src={CSS} className="stackImg"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} sm={6} lg={3}>
                            <Row>
                                <Col sm={12}>
                                    <p>Javascript</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Image src={JS} className="stackImg"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} sm={6} lg={3}>
                            <Row>
                                <Col sm={12}>
                                    <p>Rails</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Image src={RAILS} className="stackImg"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="stackParagraphs">
                        <Col md={6} sm={6} lg={3}>
                            <Row>
                                <Col sm={12}>
                                    <p>React</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Image src={REACT} className="stackImg"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} sm={6} lg={3}>
                            <Row>
                                <Col sm={12}>
                                    <p>PostgreSQL</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Image src={PSQL} className="stackImg"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} sm={6} lg={3}>
                            <Row>
                                <Col sm={12}>
                                    <p>Ruby</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Image src={RUBY} className="stackImg"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} sm={6} lg={3}>
                            <Row>
                                <Col sm={12}>
                                    <p>Git</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Image src={GIT} className="stackImg"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        </div>
        <footer>
          <hr className="hr-footer"/>
          <div className="footer">
            <a href="https://www.linkedin.com/in/art-ortega/" target="_blank"><Image src={LINKED} className="profileIcons"/></a>
            <a href="https://github.com/art-ortega" target="_blank"><Image src={GITHUB} className="profileIcons"/></a>
            <a href={RESUME} download><Image src={RES} className="profileIcons" style={{color:"black"}}/></a>
            <p>Page created by Art Ortega</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
