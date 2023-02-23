import React, { useEffect, useState } from "react";
import './style.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginIcon from '@mui/icons-material/Login';
import FormLogin from "../../../components/form-login";
import { AuthenticationContext } from "../../../services/context/token";
import { useContext } from "react";
import { Button } from "react-bootstrap";
export default function LoginPage() {
   const {user,token} = useContext(AuthenticationContext);
   const {att, setAtt} = useState(true);
   useEffect(()=>{
    if(att) {
        window.location.reload()
        setAtt(false)
    }
   },[user,token,att])       
   
   return (
        <>
            <Container fluid className="fluid" >
                <Row className="row-full-screen" >
                    <Col sm={2} className="col-container-login">
                        <Row className="row-top">
                            <Col sm={12} className="col-top">
                                <LoginIcon fontSize="large" /> <text className="text" style={{color:'  rgb(255, 102, 0)'}}>Login</text>
                            </Col>
                        </Row>
                        <Row className="row-mid">
                            <Col className="col-mid" sm={12}>
                                <FormLogin></FormLogin>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </>
    );
}