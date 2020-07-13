import React from 'react'
import {Row,Col} from 'reactstrap'
import {Navbar,Nav} from 'react-bootstrap'
import './style.css'

class Header extends React.Component{
    render(){
        return(
            <>
                <Row className="header">
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
            </>
        )
    }
}

export default Header