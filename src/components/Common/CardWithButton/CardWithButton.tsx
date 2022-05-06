import { Paper, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import StyledButton from "../StyledButton/StyledButton";

interface CardWithButtonProps {
    title: string;
    buttonText: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
}
 
const CardWithButton: FunctionComponent<CardWithButtonProps> = ({
    title, 
    buttonText, 
    startIcon, 
    endIcon, 
    onClick
}) => {
    return ( 
        <Paper sx={{padding: "1.3rem"}}>
            <Typography variant="h5" component="h3" textTransform="capitalize" marginBottom="1.2rem">
                {title}
            </Typography>
            <StyledButton 
                onClick={onClick} 
                sx={{
                    textTransform: "lowercase", 
                    paddingX: "1.6rem"
                }} 
                variant="contained" 
                type="button" 
                startIcon={startIcon} 
                endIcon={endIcon}
            >
                {buttonText}
            </StyledButton>
        </Paper>
     );
}
 
export default CardWithButton;