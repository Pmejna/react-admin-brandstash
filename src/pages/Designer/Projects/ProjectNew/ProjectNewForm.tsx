import { Grid } from "@mui/material";
import axios from "axios";
import { FunctionComponent, SyntheticEvent, useState } from "react";
import { ICreateProject } from "../../../../ts/interfaces/iProject";

interface ProjectNewFormProps {
    
}
 
const ProjectNewForm: FunctionComponent<ProjectNewFormProps> = () => {
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

    const submitForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        const url: string = process.env.REACT_APP_API_URL+'/project/create' ?? 'error';

        const response = await axios.post(url, newProjectState);
        if (response.data) {
            console.log({
                message: "Project created successfully",
                data: response.data
            })
        }
    }
    
    return ( 
        <Grid container component="form" onSubmit={submitForm} spacing={3}>
            <Grid item   sx={{mx: 4}} xs={12}>
                FORM
            </Grid>
        </Grid>
     );
}
 
export default ProjectNewForm;