import React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, tableCellClasses, Paper, TableFooter, TablePagination, IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { colors } from '../../components/colors';
import './users.css';

function createStudent(f_name, l_name, bday, gender, phone, email, id, grade, cumm_gpa, curr_gpa, hours) {
    return { f_name, l_name, bday, gender, phone, email, id, grade, cumm_gpa, curr_gpa, hours }
}

const student_rows = [
    createStudent('Ima', 'Student', '1/1/2000', 'Female', '123456789', 'imastudent@test.com', '123456789', 'Senior', '4.0', '4.0', '14'),
    createStudent('Ima', 'Student', '1/1/2000', 'Female', '123456789', 'imastudent@test.com', '123456789', 'Senior', '4.0', '4.0', '14'),
    createStudent('Ima', 'Student', '1/1/2000', 'Female', '123456789', 'imastudent@test.com', '123456789', 'Senior', '4.0', '4.0', '14'),
    createStudent('Ima', 'Student', '1/1/2000', 'Female', '123456789', 'imastudent@test.com', '123456789', 'Senior', '4.0', '4.0', '14'),
    createStudent('Ima', 'Student', '1/1/2000', 'Female', '123456789', 'imastudent@test.com', '123456789', 'Senior', '4.0', '4.0', '14'),
    createStudent('Ima', 'Student', '1/1/2000', 'Female', '123456789', 'imastudent@test.com', '123456789', 'Senior', '4.0', '4.0', '14'),
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: colors.lightBrown,
      color: theme.palette.common.white,
      fontSize: 16,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: '#F8F1EB',
      fontSize: 14,
      fontFamily: 'Poppins, sans-serif',
    },
}));

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const Users = () => {
    const [studentPage, setStudentPage] = React.useState(0);
    const [studentRowsPerPage, setStudentRowsPerPage] = React.useState(5);

    const [committeePage, setCommitteePage] = React.useState(0);
    const [committeeRowsPerPage, setCommitteeRowsPerPage] = React.useState(5);

    const [adminPage, setAdminPage] = React.useState(0);
    const [adminRowsPerPage, setAdminRowsPerPage] = React.useState(5);

    const handleChangePage = (setter) => (event, newPage) => {
        setter(newPage);
    };

    const handleChangeRowsPerPage = (pageSetter, rowsSetter) => (event) => {
        rowsSetter(parseInt(event.target.value, 10));
        pageSetter(0);
    };

    return (
        <div className="container">
            <div className="student table-container">
                <h1>Students Database</h1>
                <TableContainer component={Paper} style={{width: '90%', margin: 'auto', marginBottom: '36px' }}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>First Name</StyledTableCell>
                                <StyledTableCell>Last Name</StyledTableCell>
                                <StyledTableCell>Birthday</StyledTableCell>
                                <StyledTableCell>Gender</StyledTableCell>
                                <StyledTableCell>Phone #</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Student ID</StyledTableCell>
                                <StyledTableCell>Grade</StyledTableCell>
                                <StyledTableCell>Cumm. GPA</StyledTableCell>
                                <StyledTableCell>Curr. GPA</StyledTableCell>
                                <StyledTableCell>Credit Hours</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {(studentRowsPerPage > 0
                            ? student_rows.slice(studentPage * studentRowsPerPage, studentPage * studentRowsPerPage + studentRowsPerPage)
                            : student_rows
                        ).map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">{row.f_name}</TableCell>
                                <TableCell>{row.l_name}</TableCell>
                                <TableCell>{row.bday}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell style={{ maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.email}</TableCell>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.grade}</TableCell>
                                <TableCell>{row.cumm_gpa}</TableCell>
                                <TableCell>{row.curr_gpa}</TableCell>
                                <TableCell>{row.hours}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={11}
                                count={student_rows.length}
                                rowsPerPage={studentRowsPerPage}
                                page={studentPage}
                                slotProps={{
                                    select: {
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                    },
                                }}
                                onPageChange={handleChangePage(setStudentPage)}
                                onRowsPerPageChange={handleChangeRowsPerPage(setStudentPage, setStudentRowsPerPage)}
                                ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>

            <div className="committee-member table-container">
                <h1>Committee Members Database</h1>
                <TableContainer component={Paper} style={{width: '90%', margin: 'auto', marginBottom: '36px' }}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>First Name</StyledTableCell>
                                <StyledTableCell>Last Name</StyledTableCell>
                                <StyledTableCell>Phone #</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {(committeeRowsPerPage > 0
                            ? student_rows.slice(committeePage * committeeRowsPerPage, committeePage * committeeRowsPerPage + committeeRowsPerPage)
                            : student_rows
                        ).map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">{row.f_name}</TableCell>
                                <TableCell>{row.l_name}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={4}
                                count={student_rows.length}
                                rowsPerPage={committeeRowsPerPage}
                                page={committeePage}
                                slotProps={{
                                    select: {
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                    },
                                }}
                                onPageChange={handleChangePage(setCommitteePage)}
                                onRowsPerPageChange={handleChangeRowsPerPage(setCommitteePage, setCommitteeRowsPerPage)}
                                ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>

            <div className="admin table-container">
                <h1>Admins Database</h1>
                <TableContainer component={Paper} style={{width: '90%', margin: 'auto', marginBottom: '36px' }}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>First Name</StyledTableCell>
                                <StyledTableCell>Last Name</StyledTableCell>
                                <StyledTableCell>Phone #</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {(adminRowsPerPage > 0
                            ? student_rows.slice(adminPage * adminRowsPerPage, adminPage * adminRowsPerPage + adminRowsPerPage)
                            : student_rows
                        ).map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">{row.f_name}</TableCell>
                                <TableCell>{row.l_name}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={4}
                                count={student_rows.length}
                                rowsPerPage={adminRowsPerPage}
                                page={adminPage}
                                slotProps={{
                                    select: {
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                    },
                                }}
                                onPageChange={handleChangePage(setAdminPage)}
                                onRowsPerPageChange={handleChangeRowsPerPage(setAdminPage, setAdminRowsPerPage)}
                                ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Users;