/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react';

interface DashboardDesignerProps {
    location: any;
}
 
const DashboardDesigner: FC<DashboardDesignerProps> = (props) => {
    // eslint-disable-next-line no-console
    console.log(props.location)

    return ( 
        <>
            Dashboard Designer
        </>
     );
}
 
export default DashboardDesigner;