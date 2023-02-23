import styled from "styled-components";

export const ButtonStyle = styled.div`
    .button-default{
        width:${props => props.size} !important;
        background-color: ${props => props.bgColor} !important;
        color:${props => props.textColor} !important;        
        border: 3rem !important;
        border-radius:2rem;
        transition: 0.3s;

        /* &:hover{
            filter: brightness(0.8);
        }
        &:focus{
            filter: brightness(0.8);
        } */
    }
`;