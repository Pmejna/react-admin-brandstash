import {FunctionComponent, MouseEventHandler} from 'react';
import SvgIcon from '../../SvgIcon/SvgIcon';

interface MenuButtonProps {
    open: boolean;
    onClick?: MouseEventHandler<SVGSVGElement>;
    style?: React.CSSProperties;
}
 
const MenuButton: FunctionComponent<MenuButtonProps> = ({open, onClick, style}) => {
    return ( 
        <>
            {
                open ? (
                    <SvgIcon variant="menu-open-icon" width={30} height={24} onClick={onClick} style={style}/>
                ) : (
                    <SvgIcon variant="menu-closed-icon" width={30} height={24} onClick={onClick} style={style}/>
                )
            }
        </>
    );
}
 
export default MenuButton;