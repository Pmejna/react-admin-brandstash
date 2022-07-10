import { Grid } from '@mui/material';
import type { Dispatch, FunctionComponent, SetStateAction } from 'react';

import StyledButton from '../../components/Common/StyledButton/StyledButton';

interface SelectRegistrationModeProps {
    onClick: Dispatch<SetStateAction<string>>;
}

const SelectRegistrationMode: FunctionComponent<SelectRegistrationModeProps> = ({onClick}) => {
    return (
        <Grid container 
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', mb: 2, minWidth: '300px'}}>
                <StyledButton variant="outlined" sx={{minWidth: '300px'}} onClick={() => onClick('register-designer')}>Designer Signup</StyledButton>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center' }}>
                <StyledButton variant="contained" secondary sx={{minWidth: '300px'}} onClick={() => onClick('register-client')}>Company Signup</StyledButton>
            </Grid>
        </Grid>
    )
}

export default SelectRegistrationMode;