import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}


function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

interface MenuTabsProps {
    tabNames: string[];
    children?: React.ReactNode;
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}
 
const MenuTabs: FunctionComponent<MenuTabsProps> = ({tabNames, value, handleChange, children}) => {
   
    return ( 
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {
                            tabNames.map((tabName, index) => {
                                return <Tab key={index} label={tabName} {...a11yProps(index)} />
                            })
                        }
                    </Tabs>
                </Box>
                {children}
                
            </Grid>
        </Grid>
     );
}
 
export default MenuTabs;