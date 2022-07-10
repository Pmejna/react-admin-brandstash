/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FunctionComponent, ReactNode } from "react";

import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled} from '@mui/material/styles';


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#084077",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
 export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

interface StyledTableProps {
    tableHead: string[];
    tableData?: any[];
    children?: ReactNode;
}
 
const StyledTable: FunctionComponent<StyledTableProps> = ({tableHead, tableData, children}) => {
    return ( 
        <>
            <TableContainer component={Paper} sx={{borderRadius: 0}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {
                                tableHead.map((column, index) => (
                                    <StyledTableCell key={column+index} align={index > 0 ? "right" : "left"}>
                                        {column}
                                    </StyledTableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                     (children && !tableData) ? children : (
                        tableData?.map((rows) => (
                                <StyledTableRow key={rows[0]}>
                                    {
                                        rows.map((row: any, index: number) => (
                                            <StyledTableCell key={row+index} align={index > 0 ? "right" : "left"}>
                                                {row}
                                            </StyledTableCell>
                                        ))
                                    }
                                </StyledTableRow>
                            ))
                        )
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
     );
}
 
export default StyledTable;