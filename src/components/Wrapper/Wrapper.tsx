/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState, createContext } from 'react';
import type { FunctionComponent, ReactNode } from "react";

import { Navigate, useLocation} from "react-router-dom";

import axios from "axios";

import Navigation from "../Navigation/Navigation";

import type { User } from "../../ts/types/user";


export const UserContext = createContext<User | null>(null);

interface WrapperProps {
    children: ReactNode;
}

const Wrapper: FunctionComponent<WrapperProps> = ({children}) => {

    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [currentLocation, setCurrentLocation] = useState<string>("");
    const location = useLocation();
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
    
    useEffect(() => {
        setCurrentLocation(location.pathname);
    }, [location])

    return ( 
        <UserContext.Provider value={user}>
            {
                redirect 
                ? <Navigate to="/login" /> 
                : (
                    <Navigation location={location}>
                        {children}
                    </Navigation>
                ) 
            }
        </UserContext.Provider>
     );
}
 
export default Wrapper;