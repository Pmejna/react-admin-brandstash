import { useState } from 'react';
import type { FC } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import type { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface StyledDialogProps {
  children?:  React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  dialogContentText?: string;
  dialogTitleText?: string;
  fullScreen?: boolean;
}

const StyledDialog: FC<StyledDialogProps> = ({dialogContentText, dialogTitleText, children, open, setOpen, fullScreen}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fullWidth, setFullWidth] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('xl');

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={open}
        disableEscapeKeyDown
      >
        <DialogTitle 
          sx={{
            marginBottom: '1rem'
          }}>
          {dialogTitleText}
        </DialogTitle>
        <DialogContent sx={{
            paddingY: "1rem"
        }}>
          {dialogContentText && <DialogContentText>{dialogContentText}</DialogContentText>}
              {children}
        </DialogContent>
        <DialogActions sx={{
          position: "absolute",
          top: "0.4rem",
          right: "0.4rem",
        }}>
          <Button 
            sx={{
              backgroundColor: "#dedede", 
              color: "#090b14"
            }} 
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default StyledDialog;