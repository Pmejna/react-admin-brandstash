import { Box, SvgIcon } from '@mui/material';
import { useContext } from 'react';
import type {FC, MouseEventHandler} from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { ThemeDarkIcon, ThemeLightIcon } from '../SvgIcon/Icons';

interface ThemeButtonProps {
    onClick?: MouseEventHandler<SVGSVGElement>;
    fontSize: "small" | "inherit" | "large" | "medium" | undefined;
}
 
const ThemeButton: FC<ThemeButtonProps> = ({fontSize, ...props}) => {
    const {mode, toggleTheme} = useContext(ThemeContext);
    return ( 
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', px: '12px'}}>
            {
                mode === 'light' ? (
                    <SvgIcon fontSize={fontSize} onClick={toggleTheme} {...props}>
                        <ThemeDarkIcon/>
                    </SvgIcon>
                ) : (
                    <SvgIcon fontSize={fontSize} onClick={toggleTheme} {...props}>
                        <ThemeLightIcon/>
                    </SvgIcon>
                )
            }
        </Box>
    );
}
 
export default ThemeButton;