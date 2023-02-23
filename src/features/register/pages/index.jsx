import React from "react";
import Container from 'react-bootstrap/Container';
import FormRegister from '../../../components/form-register/index'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';


export const Register = () => {
    return (
        <Container fluid className="fluid-register" >
            <Row className="row-register-full-screen">
                <Col sm={12} className="col-container-register">
<FormRegister></FormRegister>
                </Col>
            </Row>
        </Container>

    );
}