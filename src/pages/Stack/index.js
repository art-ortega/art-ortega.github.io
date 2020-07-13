import React from 'react'
import {Row, Col, Card, CardBody, CardImg, CardTitle} from 'reactstrap'
import {Image} from 'react-bootstrap'
import './style.css'
import CSS from '../../assets/images/css.png'
import HTML from '../../assets/images/html.png'
import JS from '../../assets/images/js.png'
import PSQL from '../../assets/images/postgresql.png'
import RAILS from '../../assets/images/rails.png'
import RUBY from '../../assets/images/ruby.png'
import REACT from '../../assets/images/react.png'


class Stack extends React.Component {
    render(){
        return(
            <>
            <Row>
                <Col sm={12}>
                    
                </Col>
            </Row>
                <Row className="stack" id="stack">
                    <Col sm={12}>
                        <Card className="stackCard">
                            <Row className="stackParagraphs">
                                <Col sm={3}>
                                    <Row>
                                        <Col sm={12}>
                                            <p>HTML</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <img src={HTML}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3}>
                                    <Row>
                                        <Col sm={12}>
                                            <p>CSS</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <img src={CSS}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3}>
                                    <Row>
                                        <Col sm={12}>
                                            <p>Javascript</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <img src={JS}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3}>
                                    <Row>
                                        <Col sm={12}>
                                            <p>Rails</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <img src={RAILS}/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="stackParagraphs">
                                <Col sm={3}>
                                    <Row>
                                        <Col sm={12}>
                                            <p>React</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <Image src={REACT}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3}>
                                    <Row>
                                        <Col sm={12}>
                                            <p>PostgreSQL</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <Image src={PSQL} style={{height:"170px"}}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3}>
                                    <Row>
                                        <Col sm={12}>
                                            <p>Ruby</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <Image src={RUBY}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3}>
                                    <Row>
                                        <Col sm={12}>
                                            <p>Rails</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <Image src={RAILS}/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Stack