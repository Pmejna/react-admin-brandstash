import type { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { 
    Button, 
    useTheme 
} from "@mui/material";

import type {
    ButtonProps, 
    Theme 
} from "@mui/material";

interface ButtonStyledProps extends ButtonProps {
    theme?:     Theme;
    secondary?: boolean;
    variant?:   "text" | "outlined" | "contained";
}

interface StyledButtonProps extends ButtonStyledProps {
    children?:  React.ReactNode;
    type?:      "submit" | "button";
}

const ButtonStyled = styled(Button)<ButtonStyledProps>(({theme, variant, secondary}) => ({
    borderRadius: 12,
    border: (variant === "contained") 
            ? 'none' 
            : `1px solid ${theme.palette.common.divider}`
    ,
    backgroundColor: (variant === "contained" && !secondary) 
            ? theme.palette.common.buttonBackgroundColor 
            :   (secondary 
                        ? theme.palette.common.secondaryButtonBackgroundColor 
                        : 'transparent'
                ),
    color: (variant === "contained" && !secondary) 
            ? theme.palette.common.buttonColor 
            :   (secondary 
                        ? theme.palette.common.secondaryButtonColor 
                        : theme.palette.common.buttonColor
                ),
    fontWeight: 600,
    '&:hover': {
        color: (variant === "contained" && !secondary) 
            ? theme.palette.common.buttonColor : 
            (secondary 
                    ? theme.palette.common.secondaryButtonHoverColor 
                    : theme.palette.common.buttonColor
            ),
        backgroundColor: theme.palette.common.buttonBackgroundColorHovered
    }
}))
 
const StyledButton: FunctionComponent<StyledButtonProps> = ({children, variant, sx, secondary, onClick, type, startIcon, endIcon}) => {
    const theme = useTheme();
    return ( 
        <ButtonStyled 
            theme={theme} 
            variant={variant} 
            sx={sx} 
            secondary={secondary} 
            onClick={onClick} 
            type={type?type:"button"}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {children}
        </ButtonStyled>
     );
}
 
export default StyledButton;