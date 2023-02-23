import { api } from "../apiConnection";

import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

const LoginService = async (email, password) => {
    var tokenDecodificado = null;
    console.log("email :", email, "Senha", password, "To dentro do API login");
    try {

        const response = await api.post("User/login", {
            email,
            password
        });
         
        if (response.status === 200) {
            console.log(response);
            tokenDecodificado = jwt_decode(response.data.acess_token);
            tokenDecodificado['token'] = response.data.acess_token;
            api.defaults.headers["Authorization"] = `Bearer ${response.data.acess_token}`;

            return tokenDecodificado;

        }
    } catch (error) {
        if (error.response.message === 'Network Error') {
            toast.error('Erro ao realizar o login - Erro de conexão, o servidor pode estar fora do ar.');
        } else {
            toast.error('Erro ao realizar o login -- Email e senha devem estar escritos corretamente ');
        }
        
    }
}

export { LoginService };