import React, { FunctionComponent, ReactNode } from 'react';
import {
    MenuOpen,
    MenuClosed,
    DashboardIcon,
    NewProjectIcon,
    AllProjectsIcon,
    StatsIcon,
    ClientsIcon,
    SettingsIcon,
    MessagesIcon,
    NotificationsIcon,
    BriefIcon,
    AccountStatsIcon
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
    let iconWidth = width ? width : 28
    let iconHeight = height ? height : 28
    let viewBox = `0 0 ${width ? width: 28} ${height ? height: 28}`

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
        case 'projects-all':
            icon = <AllProjectsIcon/>
        break; 
        case 'proposal':
            icon = <NewProjectIcon/>
        break; 
        case 'stats':
            icon = <StatsIcon/>
        break; 
        case 'clients-icon':
            icon = <ClientsIcon/>
        break; 
        case 'settings-icon':
            icon = <SettingsIcon/>
        break; 
        case 'messages-icon':
            icon = <MessagesIcon/>
        break; 
        case 'notifications-icon':
            icon = <NotificationsIcon/>
        break; 
        case 'brief-icon':
            icon = <BriefIcon/>
        break; 
        case 'account-stats-icon':
            icon = <AccountStatsIcon/>
        break; 
        default: 
            icon = <DashboardIcon viewBox={viewBox}/>
        break;
    }

    return ( 
        <figure style={{width: iconWidth, height: iconHeight, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0}}>
            <svg
                onClick={onClick} 
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                style={{cursor: 'pointer'}}
                viewBox={viewBox}>
                {icon}
            </svg>
        </figure>
     );
}
 
export default SvgIcon;