import * as React from 'react';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useFormik } from "formik";
import DefaultButton from '../button';
import { useState, useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Register } from '../../services/Api/apiRegister';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function FormRegister() {
   
    let navigate = useNavigate();
    const [loadingButton, setLoadingButton] = useState(false)

    const handleRegister = async (e) => {
        setLoadingButton(true)
        e.preventDefault();
        const respostaLogin = await Register(formik.values.email, formik.values.password, formik.values.name, formik.values.document, formik.values.phone);
        if (!respostaLogin) {
            setLoadingButton(false)
        } else {
            setLoadingButton(false)
            toast.success("Cadastro realizado com sucesso");
            navigate('/');
        }
    }


    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            password:"",
            document: "",
            phone: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Nome deve ser preenchido").min(3, "O nome deve contar mais de três letras").matches(/[A-Z]+/g, "Nome inválido, deve conter ao menos uma letra maiúscula"),
            email: yup.string().required("Email deve ser preenchido").email("E-mail inválido"),
            password: yup.string().required("Senha deve ser preenchido").min(6, "6 to 10 characters.").max(10, "6 to 10 characters."),
            phone: yup.string()
                .required("Telefone deve ser preenchido")
                .min(11, 'O Telefone deve possuir 11 dígitos'),
            document: yup.string()
                .required('CPF deve ser preenchido')
                .min(11, 'O CPF deve possuir 11 dígitos')
                .matches(/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,
                    "docuemnto invalido"),
        }),
    });

    return (




        <form className='form-container' style={{ display: 'flex', flexDirection: 'column' }} onSubmit={formik.handleSubmit}>
<span style={{display:"flex",alignItems: 'end',justifyContent:"center", height:"5rem"}} className="text">Cadastro</span>
            <TextField sx={{ m: 1, width: '95%', marginTop: '1.5rem' }}
                id="standard-required"
                name="name"
                label="Name"
                type="text"
                variant="outlined"
                color="warning"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
                <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: '0.6rem', color: '#f70f0f' }} className='error'>{formik.errors.name}</div>
            ) : null}

            <TextField sx={{ m: 1, width: '95%', marginTop: '1.5rem' }}
                id="standard-required"
                name="email"
                label="Email"
                variant="outlined"
                color="warning"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
                <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: '0.6rem', color: '#f70f0f' }} className='error'>{formik.errors.email}</div>
            ) : null}

            <TextField sx={{ m: 1, width: '95%', marginTop: '1.5rem' }}
                id="standard-required"
                name='password'
                label="Password"
                type="password"
                variant="outlined"
                color="warning"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
                <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: '0.6rem', color: '#f70f0f' }} className='error'>{formik.errors.password}</div>
            ) : null}
            <TextField sx={{ m: 1, width: '95%', marginTop: '1.5rem' }}
                id="standard-required"
                name='document'
                label="CPF"
                type="document"
                variant="outlined"
                color="warning"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.document}
            />
            {formik.errors.document && formik.touched.document ? (
                <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: '0.6rem', color: '#f70f0f' }} className='error'>{formik.errors.document}</div>
            ) : null}
            <TextField sx={{ m: 1, width: '95%', marginTop: '1.5rem' }}
                id="standard-required"
                name='phone'
                label="Phone"
                type="text"
                variant="outlined"
                color="warning"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}

            />
            {formik.errors.phone && formik.touched.phone ? (
                <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: '0.6rem', color: '#f70f0f' }} className='error'>{formik.errors.phone}</div>
            ) : null}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3rem' }}>
                <DefaultButton
                    bgColor={'rgb(255, 102, 0)'} size={'15rem'} action={(e) => handleRegister(e)}
                    disabled={loadingButton}
                    type={'submit'}
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
                        <span >Criar conta</span>
                    )}</DefaultButton>
            </div>
        </form>

    );
}