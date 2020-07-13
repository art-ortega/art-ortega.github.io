import React from 'react'
import {Row,Col} from 'reactstrap'
import {Image} from 'react-bootstrap'
import './style.css'
import Profile from '../../assets/images/me-circle.png'

class Landing extends React.Component {
    render(){
        return(
            <Row className="landingPage" id="home">
                <Col sm={6} style={{textAlign:"center"}}>
                    <Image src={Profile} roundedCircle className="profilePic"/>
                </Col>
                <Col sm={5}>
                    <Row>
                        <Col sm={12}>
                            <p className="name">Art Ortega</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col sm={12}>
                            <p>Hello! I'm a full-stack web developer based out of San Diego. I'm passionate about problem solving and the outdoors. When I'm not coding, I like to spend my free time running, biking, swimming, or camping. If you'd like to know more about me, feel free to download my resume below or connect with me via LinkedIn. </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Landing