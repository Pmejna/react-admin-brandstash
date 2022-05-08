import { CircularProgress, Grid, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import {FC} from "react";
import { Link } from "react-router-dom";
import StyledTable, { StyledTableCell, StyledTableRow } from "../../../components/Common/StyledTable/StyledTable";
import { useProjects } from "../../../lib/fetcher-hooks";

const ProjectsAll: FC = () => {
    const {projects, isError, isLoading} = useProjects();
    console.log(isLoading, projects);
    
    const tableData = projects?.data.map((project: any) => [
        project.project_name,
        project.project_description,
        project.project_status,
        project.project_type,
        project.project_priority,
        project.project_uuid
    ]);

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
                        tableHead={["Project Name", "Description", "Status", "Type", "Updated", "Link"]}
                        
                    >
                        {
                        tableData.map((rows: any) => (
                                    <StyledTableRow key={rows[0]}>
                                        {
                                            rows.map((row: any, index: number) => {
                                                let cell;
                                                if (index === 5) {
                                                    cell = <Link to={`${row}`}>Click</Link>
                                                } else {
                                                    cell = row
                                                }
                                                return (
                                                    <StyledTableCell key={row+index} align={index > 0 ? "right" : "left"}>
                                                        {
                                                            cell
                                                        }
                                                    </StyledTableCell>
                                                )
                                            })
                                        }
                                    </StyledTableRow>
                                ))
                        }
                    </StyledTable>
                }
            </Grid>
        </Grid>
    )
}
export default ProjectsAll