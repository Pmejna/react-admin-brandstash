import { useTheme } from '@emotion/react';
import React, {FunctionComponent, MouseEventHandler, useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import SvgIcon from '../SvgIcon/SvgIcon';

interface ThemeButtonProps {
    open: boolean;
    onClick: MouseEventHandler<SVGSVGElement>
}
 
const ThemeButton: FunctionComponent<ThemeButtonProps> = ({open, onClick}) => {
    const {mode, toggleTheme} = useContext(ThemeContext);
    return ( 
        <>
            {
                open ? (
                    <SvgIcon variant="menu-open" width={30} height={24} onClick={onClick}/>
                ) : (
                    <SvgIcon variant="menu-closed" width={30} height={24} onClick={onClick}/>
                )
            }
        </>
    );
}
 
export default ThemeButton;