import { CircularProgress, Typography } from '@mui/material';
import {FC} from 'react';
import { useLocation } from 'react-router-dom';
import { useProject } from '../../../lib/fetcher-hooks';

const ProjectOne: FC = () => {
    
    const { pathname } = useLocation();
    const {project, isLoading} = useProject(pathname.replace("/projects/", ""))

    return (
        <>
            {
                isLoading ? <CircularProgress /> :
                (
                    <Typography>
                        {`Project: ${project?.project_name}`} 
                    </Typography>
                )
            }
        </>
    )
}

export default ProjectOne;