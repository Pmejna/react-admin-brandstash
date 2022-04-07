import { FunctionComponent } from 'react';

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