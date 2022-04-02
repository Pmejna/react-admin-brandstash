import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent, useState } from "react";
import background from "../../resources/images/register-bg.png";
import registerQuoteBg from "../../resources/images/register-quote-bg.svg";
import SelectRegistrationMode from "./SelectRegistrationMode";
import RegisterDesignerMode from "./RegisterDesignerMode";
import RegisterBrandMode from "./RegisterBrandMode";
import LoginRegisterWrapper from "../../components/Wrapper/LoginRegisterWrapper";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

interface RegisterProps {
}
 
const Register: FunctionComponent<RegisterProps> = () => {
    
    const theme = useTheme();
    const [mode, setMode] = useState("select-mode");

    return ( 
        <LoginRegisterWrapper background={background}>
            {
                mode === "select-mode" && (
                <Grid
                    item
                    component='div'
                >
                    <Box component='figure' sx={{ display: "flex", justifyContent: "center", position: 'relative' }}>
                        <Box component='img' src={registerQuoteBg} alt="Register Quote" 
                            sx={{
                                width: "400px",
                            }}
                        />
                        <Typography 
                            variant="body2" 
                            sx={{
                                position: "absolute",
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '300px',
                                textAlign: 'center',
                                fontWeight: 300,
                                fontSize: '1.5rem',
                            }}
                        >
                            "We connect you with creatives, designers, and developers who are passionate about what they do."
                        </Typography>
                    </Box>
                </Grid>
                )
            }
            <Grid
                item
                component='div'
            >
                {
                    (mode === "select-mode") ? (
                        <SelectRegistrationMode onClick={setMode}/>
                    ) : (mode === "register-designer") 
                        ?   (<RegisterDesignerMode/>)
                        :   (<RegisterBrandMode/>)
                }
            </Grid>
            <Grid
                item
                component='div'
            >
                <Typography variant="body2" sx={{ marginTop: '2rem', fontSize: '1.6rem', textAlign: 'center', fontWeight: 300}}>
                    Already have an account?
                </Typography>
                <Box component='div' sx={{ display: "flex", justifyContent: "center" }}>
                    <Link style={{fontSize: '1.3rem', textDecoration: 'none', color: `${theme.palette.primary.main}`}} to='/login'>Log In</Link>
                </Box>
            </Grid>
        </LoginRegisterWrapper>
                    
    );
}
 
export default Register;