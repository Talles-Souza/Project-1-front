import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/context/token";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import DefaultButton from "../../../components/button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import CardProfile from "../../../components/card-profile";


export const Profile = () => {
    const { userGoogle } = useContext(AuthenticationContext);
 
    return (

        <>
            <Container fluid className="fluid-home" >
                <Row className="row-full-screen-home" >
                    <Col sm={12} className='col-top-login'>
                    <Link to={'/home'}>   <DefaultButton
                            bgColor={'#ffff'}
                            size={'0.5rem'} 
                          
                        > <ArrowBackIcon className="icon-logout" fontSize="medium" /> </DefaultButton></Link>

                    </Col>
                    <Col sm={12} className='col-full'>
                         <CardProfile></CardProfile>
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