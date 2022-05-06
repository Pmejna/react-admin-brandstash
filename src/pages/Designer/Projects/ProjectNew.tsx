import { Grid } from '@mui/material';
import {FC} from 'react';
import CardWithButton from '../../../components/Common/CardWithButton/CardWithButton';
import AddIcon from '@mui/icons-material/Add';

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