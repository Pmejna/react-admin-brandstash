import { Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import MenuTabs, { TabPanel } from "../../../components/Common/MenuTabs/MenuTabs";
import { useMe } from "../../../lib/fetcher-hooks";

interface UserProps {
    
}
 
const User: FunctionComponent<UserProps> = () => {
    const [value, setValue] = useState(0);
    const {user, isError, isLoading} = useMe();
    console.log(user)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <MenuTabs tabNames={['User Stats', 'User Account']} value={value} handleChange={handleChange}>
            <TabPanel value={value} index={0}>
                {
                    user && <Typography>{user.user_email}</Typography>
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                User Account
            </TabPanel>
        </MenuTabs>
    )
}
 
export default User;