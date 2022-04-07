import {FunctionComponent, MouseEventHandler} from 'react';
import SvgIcon from '../../SvgIcon/SvgIcon';

interface MenuButtonProps {
    style?:     React.CSSProperties;
    onClick?:   MouseEventHandler<SVGSVGElement>;
    open:       boolean;
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