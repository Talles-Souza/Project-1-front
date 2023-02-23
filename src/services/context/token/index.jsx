import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Api/apiConnection";
import { LoginService } from "../../Api/apiLogin";
import { LoginGoogle } from "../../Api/apiLoginGoogle";

export const AuthenticationContext = createContext({});


export const AuthenticationProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: "",
        email: "",
        name: "",
        document: "",
        service: "",
        phone: "",
        token: "",
        date: ""
    });
    const [token, setToken] = useState('');
    const [auth, setAuth] = useState(false);
    const [service, setService] = useState('');
    const [userGoogle, setUserGoogle] = useState({
        id: "",
        email: "",
        name: "",
        service: "",
        sub: "",
        picture: "",
        token: "",
        date: ""
    });

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }

    }, [])


    const login = async (email, password) => {
        const respostaServiceLogin = await LoginService(email, password);
        if (!respostaServiceLogin) return false;
        const { Id, Email, Name, document, Phone, token } = respostaServiceLogin;
        setUser({
            id: Id,
            email: Email,
            name: Name,
            document: document,
            phone: Phone,
            token: token,
            date: new Date().getHours()
        });
        localStorage.setItem('user', JSON.stringify({
            id: Id,
            email: Email,
            name: Name,
            document: document,
            phone: Phone,
            token: token,
            date: new Date().getHours()
        }));
        setToken(respostaServiceLogin?.token)
        localStorage.setItem('token', respostaServiceLogin?.token);
        setService('local');
        // localStorage.setItem('service', service);
        return true;
    };
    const loginGoogle = async (email, sub, name, picture) => {
        const ResponseLogin = await LoginGoogle(email, sub, name, picture);
        console.log("dentro do token " + ResponseLogin);
        const { Id, Email, Name, Sub, Picture, Service, token } = ResponseLogin;
        setUserGoogle({
            id: Id,
            email: Email,
            name: Name,
            service: Service,
            sub: Sub,
            picture: Picture,
            token: token,
            date: new Date().getHours()
        });
        localStorage.setItem('user', JSON.stringify({

            id: Id,
            email: Email,
            name: Name,
            service: Service,
            sub: Sub,
            picture: Picture,
            date: new Date().getHours(),
            token: token


        }));
        setToken(token)
        localStorage.setItem('token', token);
        setService('google')
        localStorage.setItem('service', Service);
        return true;
    };



    const logOut = () => {
        setToken('');
        setAuth(false);
        localStorage.clear();
    }

    const isAuthenticated = async () => {
        var userLocal = JSON.parse(localStorage.getItem('user'));
        let hours = new Date().getHours()
        if (userLocal) {
            try {
                console.log(userLocal.date);
                console.log(hours + "  hora ");
                if ((userLocal.date - hours) < 2)
                    setAuth(true);
            } catch (error) {
                logOut()
                if (error.message === 'Network Error') {
                    toast.error('Erro ao realizar o login - Erro de conexão, o servidor pode estar fora do ar.');
                } else {
                    toast.error("Erro de autenticação.")
                }
                console.log(error)
            }
        }
    }

    return (
        <AuthenticationContext.Provider value={{
            login,
            logOut,
            user,
            isAuthenticated,
            auth,
            token,
            loginGoogle,
            userGoogle,
            service
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}