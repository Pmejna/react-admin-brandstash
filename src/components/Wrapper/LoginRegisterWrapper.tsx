import { FunctionComponent, ReactNode } from "react";
import { Box, Grid } from "@mui/material";
import title from '../../resources/images/login-register-title.svg';

declare module "*.png" {
    const value: any;
 }

interface LoginRegisterWrapperProps {
    background: any;
    children: ReactNode;
}
 
const LoginRegisterWrapper: FunctionComponent<LoginRegisterWrapperProps> = ({background, children}) => {
    return ( 
        <>
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
                                <Box component='img' src={title} alt="Title, LOgo" 
                                    sx={{
                                        width: "240px",
                                        height: 'auto'
                                    }}/>
                            </Box>
                        </Grid>
                        {children}
                    </Grid>
                </Grid>
                <Grid
                    item
                    md={7}
                    lg={8}
                    sx={{
                        display: {
                            xs: 'none', 
                            md: 'block', 
                            overflow: 'hidden', 
                            maxHeight: '100vh', 
                            margin: 0
                        },
                    }}
                >
                    <Box component='figure' sx={{p: 0, overflow: 'hidden', m: 0}}>
                        <Box component='img' src={background} alt='register' sx={{width: '100%', height: 'auto', minHeight: '100vh'}} />
                    </Box>                
                </Grid>
            </Grid> 
        </>
     );
}
 
export default LoginRegisterWrapper;