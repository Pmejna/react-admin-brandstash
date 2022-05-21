import { CircularProgress, Typography } from '@mui/material';
import {FC} from 'react';
import { useLocation } from 'react-router-dom';
import { useProject } from '../../../lib/fetcher-hooks';

const ProjectOne: FC = () => {
    
    const { pathname } = useLocation();
    const {project, isLoading} = useProject(pathname.replace("/projects/", ""));
    console.log(isLoading, project);

    return (
        <>
            {
                isLoading ? <CircularProgress /> :
                (
                    <Typography>
                        {`Client: ${project?.project_company_uuid ? project?.project_company_uuid : "No Client Assigned"}`} 
                    </Typography>
                )
            }
        </>
    )
}

export default ProjectOne;