import { CircularProgress, Grid, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import {FC} from "react";
import StyledTable from "../../../components/Common/StyledTable/StyledTable";
import { useProjects } from "../../../lib/fetcher-hooks";

const ProjectsAll: FC = () => {
    const {projects, isError, isLoading} = useProjects();
    console.log(isLoading, projects);


    return (
        <Grid 
            container 
            spacing={3} 
            sx={{}}
        >
            <Grid item xs={12}>
                {
                    (isLoading && !projects?.data) ? <CircularProgress /> :
                    <StyledTable
                        tableHead={["Project Name", "Description", "Status", "Type", "Updated"]}
                        tableData={projects?.data.map((project: any) => [
                                project.project_name,
                                project.project_description,
                                project.project_status,
                                project.project_type,
                                project.project_priority,
                            ])
                        }
                    />
                }
            </Grid>
        </Grid>
    )
}
export default ProjectsAll