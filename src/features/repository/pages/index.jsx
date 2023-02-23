import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import CardProfile from "../../../components/card-profile";
import React, { useContext, useEffect } from "react";
import { AuthenticationContext } from "../../../services/context/token";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import DefaultButton from "../../../components/button";
import ImgRepository from '../../../components/card-repository';
import { apiGit } from '../../../services/Api/apiConnection';

export const Repository = () => {
    const { userGoogle } = useContext(AuthenticationContext);

    // const gitUser = async () =>{
    //     const response = await apiGit.get();
    //     console.log(response);
    // }

    // useEffect(()=>{
    //     gitUser();
    // },[])


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
                    <Col sm={12} className='col-full-repository'>
                        <Row className='row-repository' >
                            <Col sm={12} className='col-repository1a' >
                                <ImgRepository />
                            </Col>

                        </Row>
                        <Row className='row-repository2'>
                            <Col sm={12} className='col-repository1b'>
                                <div className='card-repository-dois'>
                                  
                                        <a href="https://github.com/Talles-souza" />
                                        <img width='90%' src="https://github-readme-stats.vercel.app/api?username=Talles-Souza&show_icons=true&theme=flag-india&include_all_commits=true&count_private=true&hide_border=true" />
                                   
                                </div>


                            </Col>
                        </Row>


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