import { CircularProgress, Typography } from '@mui/material';
import {FC, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useProject } from '../../../lib/fetcher-hooks';
import { setLocation } from '../../../app/store';

const ProjectOne: FC = () => {
    
    const { pathname } = useLocation();
    const {project, isLoading} = useProject(pathname.replace("/projects/", ""));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLocation(`Projects/${project?.project_name}`));
    }, [project]);
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