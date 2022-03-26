import React, { FunctionComponent, ReactNode } from 'react';
import {
    MenuOpen,
    MenuClosed,
    DashboardIcon
} from './Icons';


interface SvgIconProps {
    variant: string;
    width?: number;
    height?: number;
    mode?: string;
    onClick?: React.MouseEventHandler<SVGSVGElement>
}
 
const SvgIcon: FunctionComponent<SvgIconProps> = ({variant, width, height, onClick}, children) => {
    let icon: null | ReactNode = null;
    let iconWidth = width ? width : 40
    let iconHeight = height ? height : 40
    let viewBox = `0 0 ${width ? width: 40} ${height ? height: 40}`

    switch (variant) {
        case 'menu-open':
            icon = <MenuOpen/>
        break; 
        case 'menu-closed':
            icon = <MenuClosed/>
        break; 
        case 'dashboard':
            icon = <DashboardIcon/>
        break; 
        default: 
            icon = <DashboardIcon/>
        break;
    }

    return ( 
        <figure style={{width: iconWidth, height: iconHeight, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0}}>
            <svg
                onClick={onClick} 
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width={'100%'} 
                height={'100%'} 
                viewBox={viewBox}>
                {icon}
            </svg>
        </figure>
     );
}
 
export default SvgIcon;