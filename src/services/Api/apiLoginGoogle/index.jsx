import { api } from "../apiConnection";

import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

const LoginGoogle = async (email, sub, name,picture) => {
    var tokenDecodificado = null;
    var service = "google";
  
    try {

        const response = await api.post("User/logingoogle", {
           email,
           name,
           service,
           sub,
           picture
        });
         
        if (response.status === 200) {
            console.log(response.data.acess_token);
            tokenDecodificado = jwt_decode(response.data.acess_token);
            tokenDecodificado['token'] = response.data.acess_token;
            api.defaults.headers["Authorization"] = `Bearer ${response.data.acess_token}`;

            return tokenDecodificado;

        }
    } catch (error) {
        if (error.message === 'Network Error') {
            toast.error('Erro ao realizar o login - Erro de conexão, o servidor pode estar fora do ar.');
        } else {
            toast.error('Erro ao realizar o login -- Email e senha devem estar escritos corretamente ');
        }
        
    }
}

export { LoginGoogle };