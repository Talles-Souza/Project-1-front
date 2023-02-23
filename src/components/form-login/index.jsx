import * as React from 'react';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DefaultButton from '../button';
import GitHubIcon from '@mui/icons-material/GitHub';
import jwtDecode from 'jwt-decode';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AuthenticationContext } from "../../services/context/token/index"
import { Spinner } from "react-bootstrap";
import './style.css';
import { useEffect } from "react";
<script src="https://accounts.google.com/gsi/client" async defer></script>


import { toast } from 'react-toastify';

export default function FormLogin() {

    const { login, user, token } = useContext(AuthenticationContext);
    const { loginGoogle } = useContext(AuthenticationContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loadingButton, setLoadingButton] = useState(false)
    let navigate = useNavigate();
    console.log(user.email);
    useEffect(() => {
        window.onload()
    }, [token])

    const handleLogin = async (e) => {
        setLoadingButton(true)
        e.preventDefault();
        const respostaLogin = await login(email, password);
        if (!respostaLogin) {
            setLoadingButton(false)
        } else {
            setLoadingButton(false)
            navigate('/home');
        }
    }


    //----- facebook login --//

    //------------------//






    const handleCredentialResponse = async (response) => {
        setLoadingButton(true)
        const data = jwtDecode(response.credential);
        if (data.email_verified === true) {
            const { email, name, sub, picture } = data;
            console.log(email, name, sub, picture);
            const responseGoogle = await loginGoogle(email, sub, name, picture);
            if (!responseGoogle) {
                setLoadingButton(false)
            } else {
                setLoadingButton(false)
                navigate('/home');
            }
        } else {
            toast.error("Email inválido");
        }
    }
    window.onload = function () {

        google.accounts.id.initialize({
            client_id: "seu client id aqui",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            {
                size: "large", type: "standard", shape: "pill", text: "signin.",

            }  // customization attributes  
        );
        // also display the One Tap dialog
        // await google.accounts.id.prompt();
    }



    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1.7, width: '33ch', display: 'flex', },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" color="warning"
                onChange={(e) => setEmail(e.target.value)}
                label="E-mail" variant="outlined" />
            <TextField id="outlined-basic" color="warning" type="password"
                onChange={(e) => setPassword(e.target.value)}
                label="Password" variant="outlined" />
            <div className='div-password'><span><a href="https://www.mozilla.org/pt-BR/" style={{ textDecoration: 'none', color: '  rgba(255, 102, 0, 0.911)' }}>Forgot password?</a></span></div>

            <div className='div-button'>
                <DefaultButton bgColor={'rgb(255, 102, 0)'} size={'15rem'} action={(e) => handleLogin(e)}
                    disabled={loadingButton}
                >
                    {loadingButton ? (
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            style={{ color: '#fffff' }}

                        />
                    ) : (
                        <span >Login</span>
                    )}</DefaultButton>
            </div>
            <div className='div-sign'>Or sign up with</div>

            <div className='div-icon'>


                <div id="buttonDiv"></div>
            </div>
            <div className='div-register'>

                Don't have an account yet? <a href='/register' style={{ color: '  rgb(255, 102, 0)' }}>Register</a>
            </div>

        </Box>
    );
}