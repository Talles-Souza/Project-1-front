import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/context/token";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import CardHome from "../../../components/card";
import LogoutIcon from '@mui/icons-material/Logout';
import { red } from '@mui/material/colors';
import { Button } from "react-bootstrap";
import DefaultButton from "../../../components/button/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Home = () => {
        const { userGoogle, logOut } = useContext(AuthenticationContext);
        const primary = red[50];

        let navigate = useNavigate();



        console.log(userGoogle);
        return (

                <>
                        <Container fluid className="fluid-home" >
                                <Row className="row-full-screen-home" >
                                        <Col sm={12} className='col-top-login'>
                                                <DefaultButton
                                                        bgColor={'#ffff'}
                                                        size={'0.5rem'}
                                                        action={() => [logOut(), navigate('/')]}
                                                > <LogoutIcon className="icon-logout" fontSize="medium" /> </DefaultButton>

                                        </Col>
                                        <Col sm={12} className='col-full'>
                                                <Link to={'/profile'} style={{ textDecoration: 'none', color: '#000000' }}><CardHome name={'Profile'} img={"https://i.imgur.com/0pNlQ4g.png"} /></Link>
                                                <Link to={'/repository'} style={{ textDecoration: 'none', color: '#000000' }}> <CardHome name={'Repository'} img={"https://i.imgur.com/JqebflW.png"} /></Link>
                                        </Col>
                                        <Col sm={12} className='col-low'>
                                                <div> <img src="https://i.imgur.com/VB0VS9q.png" alt="" />  <span> Site desenvolvido para fins educacionais.</span></div>
                                                <div><img src="https://i.imgur.com/Jsc0Wzm.png" alt="" /> Talles-Souza

                                                </div>
                                        </Col>
                                </Row>
                        </Container >
                </>
        );
}