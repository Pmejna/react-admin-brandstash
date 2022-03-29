import styled from "@emotion/styled";
import { Button, ButtonProps, Theme, useTheme } from "@mui/material";
import { FunctionComponent } from "react";


interface ButtonStyledProps extends ButtonProps {
    primary?: boolean;
    theme?: Theme;
    secondary?: boolean;
    variant?: "text" | "outlined" | "contained";
}

interface StyledButtonProps extends ButtonStyledProps {
    children?: React.ReactNode;
}

const ButtonStyled = styled(Button)<ButtonStyledProps>(({theme, variant, secondary}) => ({
    borderRadius: 12,
    border: (variant === "contained") ? 'none' : `1px solid ${theme.palette.common.divider}`,
    backgroundColor: (variant === "contained" && !secondary) ? theme.palette.common.buttonBackgroundColor : (secondary ? theme.palette.common.secondaryButtonBackgroundColor : 'transparent'),
    color: (variant === "contained" && !secondary) ? theme.palette.common.buttonColor : (secondary ? theme.palette.common.secondaryButtonColor : theme.palette.common.buttonColor),
    '&:hover': {
        color: (variant === "contained" && !secondary) ? theme.palette.common.buttonColor : (secondary ? theme.palette.common.secondaryButtonHoverColor : theme.palette.common.buttonColor),
    }
}))
 
const StyledButton: FunctionComponent<StyledButtonProps> = ({children, variant, sx, secondary, onClick}) => {
    const theme = useTheme();
    return ( 
        <ButtonStyled theme={theme} variant={variant} sx={sx} secondary={secondary} onClick={onClick}>{children}</ButtonStyled>
     );
}
 
export default StyledButton;