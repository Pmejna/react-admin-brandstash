import { Grid } from '@mui/material';
import {FC, useState} from 'react';
import CardWithButton from '../../../../components/Common/CardWithButton/CardWithButton';
import AddIcon from '@mui/icons-material/Add';
import StyledDialog from '../../../../components/Common/StyledDialog/StyledDialog';
import ProjectNewForm from './ProjectNewForm';

interface ProjectNewProps {
    setOpen: (open: boolean) => void;
    open: boolean;
}

const ProjectNewModal: FC<ProjectNewProps> = ({open, setOpen}) => {

    return (
        <StyledDialog 
            open={open} 
            setOpen={setOpen} 
            dialogTitleText="Create New Project" 
        >
            <ProjectNewForm/>
        </StyledDialog>
    );
}

const ProjectNew: FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CardWithButton 
                        title="New Project" 
                        buttonText="create" 
                        endIcon={<AddIcon/>} 
                        onClick={() => setOpen(true)}
                    />
                </Grid>
            </Grid>
            <ProjectNewModal open={open} setOpen={setOpen}/>
        </>
    )
}

export default ProjectNew;