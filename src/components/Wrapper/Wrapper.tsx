import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import ProjectBrief from "../../pages/Designer/Brief/ProjectBrief";
import ProjectsBriefs from "../../pages/Designer/Brief/ProjectsBriefs";
import ProjectNew from "../../pages/Designer/Projects/ProjectNew";
import ProjectOne from "../../pages/Designer/Projects/ProjectOne";
import ProjectsAll from "../../pages/Designer/Projects/ProjectsAll";
import ProjectsStats from "../../pages/Designer/Projects/ProjectsStats";
import Login from "../../pages/Login";
import Navigation from "../Navigation/Navigation";

interface Props {
    children: ReactNode;
}
 
interface State {
    
}

const initialState: State = {
};
 
class  Wrapper extends React.Component<Props, State> {
    state = {}
    render() { 
        return ( 
            <>
                <Navigation>
                    {this.props.children}
                </Navigation>
            </>
         );
    }
}
 
export default Wrapper;