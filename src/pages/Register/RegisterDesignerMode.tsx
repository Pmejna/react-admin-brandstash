import { FormControl, FormHelperText, Grid, Input, InputLabel, Typography } from "@mui/material";
import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/Common/StyledButton/StyledButton";
import axios from "axios";
import { companyType } from "../../ts/enums/company";

interface RegisterDesignerModeProps {
    
}

interface RegisterState {
    company_name: string | null;
    company_type:  companyType;
    first_name?: string | null;
    last_name?: string | null;
    email: string | null;
    password: string | null;
    password_confirm: string | null;
}
 
const RegisterDesignerMode: FunctionComponent<RegisterDesignerModeProps> = () => {
    const [registerState, setRegisterState] = useState({
        company_name: '', 
        company_type: companyType.company_designer,
        first_name: '', 
        last_name: '', 
        email: '', 
        password: '', 
        password_confirm: '',
        role_id: 7
    });
    const navigate = useNavigate()
    const submitForm = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.post('http://127.0.0.1:8000/v1/api/register', registerState);
        if (response.data) {
            setTimeout( () => {
                navigate("/login") 
            }, 1000)
        }
    }

    return ( 
        <Grid container 
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Grid item component="form" onSubmit={submitForm} sx={{mx: 4}} xs={12}>
                <Typography variant="h2" sx={{ marginTop: '10vh', marginBottom: '1.2rem', fontSize: '1.6rem', textAlign: 'center'}}>Your Design Studio Sign Up</Typography>
                <Grid container sx={{display: 'flex', flexDirection: 'row', marginTop: '1rem'}}>
                    <Grid item xs={12} md={6}>
                        <FormControl sx={{width: '100%', paddingRight: '0.8rem'}}>
                            <InputLabel htmlFor="company-name">Company Name</InputLabel>
                            <Input 
                                id="company-name" 
                                onChange={e => setRegisterState(previousState => ( {...previousState, company_name: e.target.value}))}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{gap: '0.4rem'}}>
                        <FormControl sx={{width: '100%'}}>
                            <InputLabel htmlFor="first-name">First Name</InputLabel>
                            <Input 
                                id="first-name" 
                                onChange={e => setRegisterState(previousState => ( {...previousState, first_name: e.target.value}))}
                                required
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container sx={{display: 'flex', flexDirection: 'row', marginTop: '1rem'}}>
                    <Grid item xs={12} md={6}>
                        <FormControl sx={{width: '100%', paddingRight: '0.8rem'}}>
                            <InputLabel htmlFor="last-name">Last Name</InputLabel>
                            <Input 
                                id="last-name" 
                                onChange={e => setRegisterState(previousState => ( {...previousState, last_name: e.target.value}))}
                                required
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{gap: '0.4rem'}}>
                        <FormControl sx={{width: '100%'}}>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input 
                                id="email" 
                                onChange={e => setRegisterState(previousState => ( {...previousState, email: e.target.value}))}
                                required
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container sx={{display: 'flex', flexDirection: 'row', marginTop: '1rem'}}>
                    <Grid item xs={12} md={6}>
                        <FormControl sx={{width: '100%', paddingRight: '0.8rem'}}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input 
                                id="password" 
                                onChange={e => setRegisterState(previousState => ( {...previousState, password: e.target.value}))}
                                required
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{gap: '0.4rem'}}>
                        <FormControl sx={{width: '100%'}}>
                            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                            <Input 
                                id="confirm-password" 
                                onChange={e => setRegisterState(previousState => ( {...previousState, password_confirm: e.target.value}))}
                                required
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container sx={{marginTop: "1rem"}}>
                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center' }}>
                        <StyledButton variant="contained" secondary={true} sx={{minWidth: '300px'}} type="submit">Send</StyledButton>
                    </Grid>
                </Grid>
          </Grid>
        </Grid>
     );
}
 
export default RegisterDesignerMode;