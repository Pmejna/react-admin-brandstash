import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface RegisterBrandModeProps {
    
}
 
const RegisterBrandMode: FunctionComponent<RegisterBrandModeProps> = () => {
    return ( 
        <Grid container 
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
          <Grid component="form" item xs={12}>
            <Typography variant="h2" gutterBottom>Your Brand/Company Sign Up</Typography>
          </Grid>
        </Grid>
     );
}
 
export default RegisterBrandMode;