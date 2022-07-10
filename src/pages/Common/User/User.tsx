import { Typography } from "@mui/material";
import { useState } from "react";
import type { FC } from "react";

import MenuTabs, { TabPanel } from "../../../components/Common/MenuTabs/MenuTabs";
import { useMe } from "../../../lib/fetcher-hooks";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserProps {
    
}
 
const User: FC<UserProps> = () => {
    const [value, setValue] = useState(0);
    const {user} = useMe();

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