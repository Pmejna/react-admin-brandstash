import { Grid } from '@mui/material';
import {FC, useState} from 'react';
import CardWithButton from '../../../components/Common/CardWithButton/CardWithButton';
import AddIcon from '@mui/icons-material/Add';
import StyledDialog from '../../../components/Common/StyledDialog/StyledDialog';
import { ICreateProject } from '../../../ts/interfaces/iProject';

const ProjectNewModal: FC = () => {
    const [newProjectState, setNewProjectState] = useState<ICreateProject>({
        user_id: "",
        project_name: "",
        project_description: "", 
        project_status: "",
        project_type: "",
        project_priority: "",
        project_progress: 0,
        project_budget: 0,
        project_objective: "",
        project_start_date: null,
        project_end_date: null,
        project_company_uuid: "",
        project_client_company_uuid: "",
    });

    return (
        <StyledDialog>
            <Grid container component="form" onSubmit={submitForm} spacing={3}>
                <Grid item   sx={{mx: 4}} xs={12}>

                </Grid>
            </Grid>
        </StyledDialog>
    );
}

const ProjectNew: FC = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardWithButton title="New Project" buttonText="create" endIcon={<AddIcon/>}/>
            </Grid>
        </Grid>
    )
}

export default ProjectNew;