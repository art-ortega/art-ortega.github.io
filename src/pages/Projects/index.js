import React from 'react' 
import {Row, Col, Card, CardTitle,CardText,CardImg, CardHeader,Button} from 'reactstrap'
import './style.css'
import LEARN from '../../assets/images/prework-learn2.png'
import DINE from '../../assets/images/dinebud.png'
import DEAL from '../../assets/images/dealnodeal.gif'
import BATTLE from '../../assets/images/battles.gif'

class Projects extends React.Component {
    render(){
        return(
            <Row>
                <Col sm={3}>
                    <Card className="cartas">
                        <CardHeader>Battleship</CardHeader>
                        <CardImg top style={{width:"100%"}} src={BATTLE} alt="projectimg" className="cardImg"/>
                        <CardText>Remake of Battleship created using React.js</CardText>
                        <Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}>Github</Button>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card className="cartas">
                        <CardHeader>Deal-No-Deal</CardHeader>
                        <CardImg top style={{width:"100%"}} src={DEAL} alt="projectimg" className="cardImg"/>
                        <CardText>Text-based game created in Ruby</CardText>
                        <Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}>Github</Button>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card className="cartas">
                        <CardHeader>Dinebud</CardHeader>
                        <CardImg top style={{width:"100%"}} src={DINE} alt="dinebud image" className="cardImg"/>
                        <CardText>A group project that me and two other individuals created for our capstone. Dinebud is a platform that connects individuals who want to dine with </CardText>
                        <Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}>Live Demo</Button>
                        <Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}>Github</Button>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card className="cartas">
                        <CardHeader>Prework LEARN</CardHeader>
                        <CardImg top style={{width:"100%"}} src={LEARN} alt="preworklearn" className="cardImg"/>
                        <CardText>A project that was assigned during my internship at LEARN Academy. We created a prework curriculum course to prepare future students who plan on attending LEARN. </CardText>
                        <Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}} href="">Live Site</Button>
                        <Button style={{backgroundColor:"white", color:"black",width:"90%",margin:"0 auto",marginBottom:"10px"}}>Github</Button>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Projects