import axios from "axios";
import React, { FunctionComponent, ReactNode, useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import ProjectBrief from "../../pages/Designer/Brief/ProjectBrief";
import ProjectsBriefs from "../../pages/Designer/Brief/ProjectsBriefs";
import ProjectNew from "../../pages/Designer/Projects/ProjectNew";
import ProjectOne from "../../pages/Designer/Projects/ProjectOne";
import ProjectsAll from "../../pages/Designer/Projects/ProjectsAll";
import ProjectsStats from "../../pages/Designer/Projects/ProjectsStats";
import Login from "../../pages/Login";
import { User } from "../../ts/types/user";
import Navigation from "../Navigation/Navigation";

export const UserContext = React.createContext<User | null>(null);

interface Props {
}

interface WrapperProps {
    children: ReactNode;
}

const Wrapper: FunctionComponent<WrapperProps> = ({children}) => {

    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const userData = useMemo<User | void>(() => {
        (
            async  () => {
                try {
                    const {data} = await axios.get('user');
                    setUser(data);
                    return data;
                }catch (err) {
                    setRedirect(true)
                }
            }
        )()
        }, [])

    return ( 
        <UserContext.Provider value={user}>
            {
                redirect 
                ? <Navigate to="/login" /> 
                : (
                    <Navigation>
                        {children}
                    </Navigation>
                ) 
            }
        </UserContext.Provider>
     );
}
 
export default Wrapper;