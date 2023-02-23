import { React } from "react";
import Button from '@mui/material/Button';
import { ButtonStyle } from './style';


export default function DefaultButton({
    size, bgColor, textColor, action, children, type, disabled }) {
    return (
        <ButtonStyle size={size} bgColor={bgColor} textColor={textColor}>
            <Button
                variant="contained"
                className="button-default"
                style={{ maxWidth: "100%" }}
                onClick={action}
                type={type}
                disabled={disabled}
                tabIndex={0}
                disableTouchRipplele>
                {children}
            </Button>
        </ButtonStyle>
    );
}