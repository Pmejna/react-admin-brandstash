import type {Ref, FunctionComponent, MouseEventHandler} from 'react';
import { Button, ListItem, SvgIcon } from '@mui/material';
import {forwardRef} from 'react';

import { SettingsIcon } from '../../SvgIcon/Icons';

interface SettingsButtonProps {
    onClick?:       MouseEventHandler<HTMLButtonElement>;
    ref?:           Ref<HTMLButtonElement>;
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
            <ListItem>
            <SvgIcon component={'button'} fontSize={fontSize?fontSize:"large"} onClick={onClick} {...props}>
                <SettingsIcon/>
            </SvgIcon>
            </ListItem>
        </Button>
    );
})
 
export default SettingsButton;