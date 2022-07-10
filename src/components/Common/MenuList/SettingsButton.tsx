import { Button, SvgIcon } from '@mui/material';
import type {FunctionComponent, MouseEventHandler} from 'react';
import {forwardRef} from 'react';

import { SettingsIcon } from '../../SvgIcon/Icons';

interface SettingsButtonProps {
    onClick?:       MouseEventHandler<SVGSVGElement>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?:           React.Ref<any>;
    handleToggle?:  () => void;
    fontSize?:      "small" | "inherit" | "large" | "medium" | undefined;
    open?:          boolean;
    id?:            string;
}
 
const SettingsButton: FunctionComponent<SettingsButtonProps> = forwardRef(({
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