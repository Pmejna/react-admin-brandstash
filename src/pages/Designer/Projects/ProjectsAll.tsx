/* eslint-disable @typescript-eslint/no-explicit-any */
import { CircularProgress, Grid  } from "@mui/material";
import { useEffect} from "react";
import type { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import StyledTable, { StyledTableCell, StyledTableRow } from "../../../components/Common/StyledTable/StyledTable";
import { useProjects } from "../../../lib/fetcher-hooks";
import { setLocation } from "../../../app/store";

const ProjectsAll: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLocation('Projects'));
    });
    const {projects, isLoading} = useProjects();
    
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
                                                    cell = <Link style={{textDecoration: "none", color: "#00005D", fontWeight: "bold"}} to={`${row}`}>Click</Link>
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