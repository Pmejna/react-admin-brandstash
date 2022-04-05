import { Box, Button, SvgIcon } from '@mui/material';
import React, {FunctionComponent, MouseEventHandler, useContext} from 'react';
import { SettingsIcon } from '../../SvgIcon/Icons';

interface SettingsButtonProps {
    onClick?: MouseEventHandler<SVGSVGElement>;
    fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
    ref?: React.Ref<any>;
    open?: boolean;
    id?: string;
    handleToggle?: () => void;
}
 
const SettingsButton: FunctionComponent<SettingsButtonProps> = React.forwardRef(({
        onClick, 
        fontSize,
        open,
        handleToggle,
        id,
        ...props
        }, 
        ref
    ) => {
    return ( 
        <Button 
            ref={ref}
            id={id}
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{
                padding: 0
            }}
        >
            <SvgIcon fontSize={fontSize?fontSize:"large"} onClick={onClick} {...props}>
                <SettingsIcon/>
            </SvgIcon>
        </Button>
    );
})
 
export default SettingsButton;