import { Box, FormControl, Grid, Input, InputLabel, Typography, useTheme } from '@mui/material';
import axios from 'axios';
import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import StyledButton from '../components/Common/StyledButton/StyledButton';
import LoginRegisterWrapper from '../components/Wrapper/LoginRegisterWrapper';
import background from "../resources/images/login-bg.png";


interface LoginProps {
}

interface LoginStateProps {
    email: string;
    password: string;
}
 
const Login: FunctionComponent<LoginProps> = () => {
    const [loginState, setLoginState] = useState<LoginStateProps>({
        email: "",
        password: ""
    });

    const [redirect, setRedirect] = useState(false);
    const theme = useTheme();

    // const navigate = useNavigate()
    const login = async (e: SyntheticEvent) => {
        e.preventDefault();
        const url: string = process.env.REACT_APP_API_URL ?? 'error';

        await axios.post(url+'/login', loginState, {withCredentials: true})
        .then( res=> {
            if (res.data) {
                setRedirect(true);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    if (redirect) {
        return <Navigate to="/dashboard" />;
    }

    return ( 
        <LoginRegisterWrapper background={background}>
            <Grid item component="form" onSubmit={login} sx={{mx: 4}} xs={12}>
            <Typography variant="h2" sx={{ marginTop: '10vh', marginBottom: '1.2rem', fontSize: '1.6rem', textAlign: 'center'}}>Login To Your Account</Typography>
                <Grid container sx={{display: 'flex', flexDirection: 'row', marginTop: '1rem'}}>
                    <Grid item xs={12} sx={{marginTop: '1.4rem'}}>
                        <FormControl sx={{width: '100%', paddingRight: '0.8rem'}}>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input 
                                id="email" 
                                type='email'
                                onChange={e => setLoginState(previousState => ( {...previousState, email: e.target.value}))}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sx={{gap: '0.4rem', marginTop: '1.4rem'}}>
                        <FormControl sx={{width: '100%'}}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input 
                                id="password"
                                type='password' 
                                onChange={e => setLoginState(previousState => ( {...previousState, password: e.target.value}))}
                                required
                            />
                        </FormControl>
                    </Grid>
                    <Grid container sx={{marginTop: "1rem"}}>
                        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center' }}>
                            <StyledButton variant="contained" secondary={true} sx={{minWidth: '300px'}} type="submit">Login</StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                component='div'
            >
                <Typography variant="body2" sx={{ marginTop: '2rem', fontSize: '1.6rem', textAlign: 'center', fontWeight: 300}}>
                    Don't have an account?
                </Typography>
                <Box component='div' sx={{ display: "flex", justifyContent: "center" }}>
                    <Link style={{fontSize: '1.3rem', textDecoration: 'none', color: `${theme.palette.primary.main}`}} to='/'>Register</Link>
                </Box>
            </Grid>
        </LoginRegisterWrapper>
     );
}
 
export default Login;
