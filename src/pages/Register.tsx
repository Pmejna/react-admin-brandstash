import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FunctionComponent, useState } from "react";
import background from "../resources/images/register-bg.png";
import registerTitle from "../resources/images/register-title.svg";
import registerQuoteBg from "../resources/images/register-quote-bg.svg";
import StyledButton from "../components/Common/StyledButton/StyledButton";

interface RegisterProps {
    
}
 
const Register: FunctionComponent<RegisterProps> = () => {
    interface RegisterModeSelect {
        mode: "register-designer" | "register-client" | "select-mode";
    }
    
    const [mode, setMode] = useState("select-mode");

    return ( 
        <Grid
            component='main'
            container
            sx={{ 
                minHeight: '100vh',
            }}

        >
            <Grid
                item
                xs={12}
                md={5}
                lg={4}
                sx={{
                    backgroundColor: "#fff",
                    p: 3,
                }}
            >
                <Grid
                    component='div'
                    container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",

                    }}
                >
                    <Grid
                        item
                        component='div'
                        sx={{
                            marginTop: '6vh'
                        }}
                    >
                        <Box
                            component='figure'
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Box component='img' src={registerTitle} alt="Register Title" 
                                sx={{
                                    width: "240px",
                                    height: 'auto'
                                }}/>
                        </Box>
                    </Grid>
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
                                    fontWeight: 300
                                 }}
                            >
                                "We connect you with creatives, designers, and developers who are passionate about what they do."
                            </Typography>
                            
                        </Box>
                    </Grid>
                    <Grid
                        item
                        component='div'
                    >
                        {
                            mode === "select-mode" && (
                                <Grid container 
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', mb: 2, minWidth: '300px'}}>
                                        <StyledButton variant="outlined" sx={{minWidth: '300px'}}>Designer Signup</StyledButton>
                                    </Grid>
                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center' }}>
                                        <StyledButton variant="contained" secondary sx={{minWidth: '300px'}} >Company Signup</StyledButton>
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                md={7}
                lg={8}
                sx={{
                    display: {xs: 'none', md: 'block', overflow: 'hidden', maxHeight: '100vh', margin: 0},
                }}
            >
                <Box component='figure' sx={{p: 0, overflow: 'hidden', m: 0}}>
                    <Box component='img' src={background} alt='register' sx={{width: '100%', height: 'auto', minHeight: '100vh'}} />
                </Box>                
            </Grid>
        </Grid> 
    );
}
 
export default Register;