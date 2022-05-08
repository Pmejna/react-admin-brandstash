import { FormControl, Grid, Input, InputLabel, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import { FunctionComponent, SyntheticEvent, useContext, useDebugValue, useEffect, useState } from "react";
import StyledButton from "../../../../components/Common/StyledButton/StyledButton";
import { ICreateProject, ProjectPriority, ProjectStatus } from "../../../../ts/interfaces/iProject";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useMe } from "../../../../lib/fetcher-hooks";
import dayjs from "dayjs";


const ProjectNewForm: FunctionComponent = () => {
    const {user, isError, isLoading} = useMe();
    const [newProjectState, setNewProjectState] = useState<ICreateProject>({
        user_id: "",
        project_name: "",
        project_description: "", 
        project_status: ProjectStatus.ACTIVE,
        project_type: "",
        project_priority: ProjectPriority.LOW,
        project_progress: 0,
        project_budget: 0,
        project_budget_estimated: "",
        project_objective: "",
        project_start_date: null,
        project_end_date: null,
        project_company_uuid: "",
    });

    useEffect(() => {
        user && setNewProjectState(prevState => ({...prevState, user_id: user.user_id, project_company_uuid: user.company.company_uuid}));
    }, [user]);

    const startData = dayjs(newProjectState.project_start_date);
    const endData = dayjs(newProjectState.project_end_date);
    const parseSubmitData = () => {
        setNewProjectState(prevState => ({...prevState, project_start_date: startData.format("MMMM D, YYYY h:mm A"), project_end_date: endData.format("MMMM D, YYYY h:mm A")}));
    };

    const submitForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        const url: string = process.env.REACT_APP_API_URL+'/project/create' ?? 'error';
        const parsedData = parseSubmitData();
        console.log(newProjectState)
        const response = await axios.post(url, newProjectState);
        if (response.data) {
            console.log({
                message: "Project created successfully",
                data: response.data
            })
        }
    }
    
    return ( 
        <Grid 
            container 
            component="form" 
            onSubmit={submitForm} 
            spacing={3} 
            sx={{}}
        >
            <Grid item xs={12} md={6}>
                <FormControl sx={{width: '100%'}}>
                    <TextField
                        id="project-name" 
                        label="Project Name"
                        variant="standard"
                        onChange={e => setNewProjectState(previousState => ( {...previousState, project_name: e.target.value}))}
                        required   
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl sx={{width: '100%'}}>
                    <TextField
                        id="project-type" 
                        label="Project Type"
                        variant="standard"
                        onChange={e => setNewProjectState(previousState => ( {...previousState, project_type: e.target.value}))}
                        required   
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    id="project-priority"
                    select
                    label="Project Priority"
                    value={newProjectState.project_priority}
                    required   
                    onChange={e => setNewProjectState(previousState => ( {...previousState, project_priority: e.target.value}))}
                    helperText="Please select your project priority"
                    variant="standard"
                    sx={{
                        width: '100%'
                    }}
                    >
                        <MenuItem key={"active"} value={ProjectPriority.LOW}>
                            <Typography color="#7a7a7a" variant="body2">
                                Low
                            </Typography>
                        </MenuItem>
                        <MenuItem key={"active"} value={ProjectPriority.MEDIUM}>
                            <Typography color="#599afc" variant="body2">
                                Medium
                            </Typography>
                        </MenuItem>
                        <MenuItem key={"active"} value={ProjectPriority.HIGH}>
                            <Typography color="#ff2727" variant="body2">
                                High
                            </Typography>
                        </MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    id="project-objective"
                    label="Project Objective"
                    value={newProjectState.project_objective}
                    required   
                    onChange={e => setNewProjectState(previousState => ( {...previousState, project_objective: e.target.value}))}
                    variant="standard"
                    sx={{
                        width: '100%'
                    }}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <DatePicker
                            label="Start Date"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={newProjectState.project_start_date}
                            onChange={newValue => setNewProjectState(previousState => ( {...previousState, project_start_date: newValue}))}
                            renderInput={(params) => <TextField required {...params} />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <DatePicker
                            disablePast
                            label="End Date"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={newProjectState.project_end_date}
                            onChange={newValue => setNewProjectState(previousState => ( {...previousState, project_end_date: newValue}))}
                            renderInput={(params) => <TextField required {...params} />}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    id="project-budget-estimated"
                    label="Project Budget Estimation"
                    value={newProjectState.project_budget_estimated}
                    required   
                    variant="standard"
                    sx={{
                        width: '100%'
                    }}
                    onChange={e => setNewProjectState(previousState => ( {...previousState, project_budget_estimated: e.target.value}))}
                />
            </Grid>
            <Grid item xs={12}>
                <FormControl sx={{width: '100%'}}>
                    <TextField
                        id="project-description"
                        label="Project Description"
                        variant="standard"
                        multiline
                        maxRows={4}
                        onChange={e => setNewProjectState(previousState => ( {...previousState, project_description: e.target.value}))}
                    />
                </FormControl>
            </Grid>
            <Grid container sx={{marginTop: "1rem", paddingLeft: "24px"}}>
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'left' }}>
                    <StyledButton 
                        variant="contained" 
                        secondary={true} 
                        sx={{
                            minWidth: '100px'
                        }} type="submit">Submit</StyledButton>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default ProjectNewForm;

