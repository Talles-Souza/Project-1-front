import { api } from "../apiConnection";
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';



export const Register = async (email,password,name,document,phone) => {
    var service = "local";
   try {
    const response = await api.post("User/register", {
 
        email,
        password,
        name,
        document,
        phone,
        service
    });
    if(response.status === 200) return true;
   } catch (error) {
    if (error.message === 'Network Error') {
        toast.error('Erro ao realizar o login - Erro de conexão, o servidor pode estar fora do ar.');
    } else {
        toast.error('Erro ao realizar o Cadastro ');
    }
   }
   
   
};