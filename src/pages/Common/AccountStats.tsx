import { Grid } from "@mui/material";
import type { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AccountStatsProps {}
 
const AccountStats: FC<AccountStatsProps> = () => {

    return ( 
        <Grid container>
            <Grid item xs={12}>
                Account Stats
            </Grid>
            
        </Grid>
     );
}
 
export default AccountStats;