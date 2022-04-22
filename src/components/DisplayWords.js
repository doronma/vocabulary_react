import React from 'react'
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const DisplayWords = () => {
    const { words } = useSelector(
        (state) => state.words);
  
    return (
        <div>
           
            <TableContainer component={Paper } sx={{ minWidth: 100  , maxWidth:400}}>
                <Table sx={{ minWidth: 100  , maxWidth:400}} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor: 'blue'}}>
                            <TableCell style={{color:'white'}}>English Word </TableCell>
                            <TableCell style={{color:'white'}}>Heb Word </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {words.map((row) => (
                            <TableRow
                                key={row.eng}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.eng}
                                </TableCell>
                                <TableCell align="right" component="th" scope="row">
                                    {row.heb}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DisplayWords