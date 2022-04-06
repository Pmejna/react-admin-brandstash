import React, { FunctionComponent } from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';

interface DashboardDesignerProps {
    location: any;
}
 
const DashboardDesigner: FunctionComponent<DashboardDesignerProps> = (props) => {
    console.log(props.location)

    return ( 
        <>
            Dashboard Designer
        </>
     );
}
 
export default DashboardDesigner;