import { Grid } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";



interface AccountStatsProps {
    
}
 
const AccountStats: FunctionComponent<AccountStatsProps> = () => {

    return ( 
        <Grid container>
            <Grid item xs={12}>
                Account Stats
            </Grid>
            
        </Grid>
     );
}
 
export default AccountStats;