import { filter } from "lodash";
import { Icon } from "@iconify/react";
import { sentenceCase } from "change-case";
import { useState, useEffect } from "react";
import plusFill from "@iconify/icons-eva/plus-fill";
import editFill from "@iconify/icons-eva/edit-fill";
import eyeFill from "@iconify/icons-eva/eye-fill";
import uploadFill from "@iconify/icons-eva/upload-fill";
import { Link, Link as RouterLink } from "react-router-dom";
// material
import { useTheme } from "@material-ui/core/styles";
import {
  Card,
  Table,
  Stack,
  Avatar,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@material-ui/core";
// redux
import { useDispatch, useSelector } from "src/redux/store";
import { getUserList, deleteUser } from "src/redux/slices/user";
// routes
import { PATH_DASHBOARD } from "src/routes/paths";
// hooks
import useSettings from "src/hooks/useSettings";
// components
import Page from "src/components/Page";
import Scrollbar from "src/components/Scrollbar";
import SearchNotFound from "src/components/SearchNotFound";

import {
  UserListHead,
  UserListToolbar,
  UserMoreMenu,
} from "src/components/_dashboard/user/list";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import { GetAllEmployee } from "src/components/_dashboardone/API/GetAllEmployee";
import moment from "moment";
import { ButtonGroup, Button } from "@mui/material";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "ssn", label: "SSN", alignRight: false },
  { id: "contact", label: "Contact", alignRight: false },
  { id: "empId", label: "Emp-Id", alignRight: false },
  { id: "type", label: "Emp-Type", alignRight: false },
  { id: "createDate", label: "Create Date", alignRight: false },
  { id: "Edit", label: "Edit Details", alignRight: false },
  { id: "create", label: "Project", alignRight: false },
  { id: "documents", label: "Documents", alignRight: false },
  { id: "sheet", label: "Sheet", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function View_employee() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    GetAllEmployee(setEmployeeDetails);
  }, [dispatch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = employeeDetails.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - employeeDetails.length)
      : 0;

  const filteredUsers = applySortFilter(
    employeeDetails,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Page title="Employee List | Asfiya_Art_Shop">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="Employee List"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "Employee", href: PATH_DASHBOARD.employee.root },
            { name: "List" },
          ]}
          action={
            <Button
              variant="contained"
              component={RouterLink}
              to={PATH_DASHBOARD.employee.addEmployee}
              startIcon={<Icon icon={plusFill} />}
              sx={{
                "&:hover": {
                  backgroundColor: "#007B55",
                  color: "#fff",
                },
              }}
            >
              New Employee
            </Button>
          }
        />

        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={employeeDetails.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        id,
                        name,
                        ssn,
                        email,
                        employeeId,
                        employmentType,
                        createDate,
                      } = row;
                      const isItemSelected = selected.indexOf(name) !== -1;
                      return (
                        <TableRow
                          hover
                          key={id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, name)}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Avatar
                                alt={name}
                                src={"/static/mock-images/avatar_1.jpg"}
                              />
                              <Typography variant="subtitle2" noWrap>
                                {name}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="left">{ssn}</TableCell>
                          <TableCell align="left">{email}</TableCell>
                          <TableCell align="left">{employeeId}</TableCell>
                          <TableCell align="left">{employmentType}</TableCell>
                          <TableCell align="left">
                            {moment(createDate).format("DD/MM/YYYY")}
                          </TableCell>

                          <TableCell align="right">
                            <Button
                              variant="contained"
                              component={RouterLink}
                              startIcon={<Icon icon={editFill} />}
                              to={PATH_DASHBOARD.employee.editEmployee}
                              state={{ data: row }}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "#007B55",
                                  color: "#fff",
                                },
                              }}
                            >
                              Edit
                            </Button>
                          </TableCell>
                          <TableCell align="center" sx={{ display: "flex" }}>
                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic mixed styles example"
                            >
                              <Link
                                to={PATH_DASHBOARD.project.addProject}
                                state={{ data: row }}
                              >
                                <button
                                  type="button"
                                  class="btn btn-danger p-2"
                                >
                                  <Icon icon={plusFill} />
                                </button>
                              </Link>
                              <Link
                                to={PATH_DASHBOARD.project.projectbyEmpId}
                                state={{ emp_id: row.id }}
                              >
                                <button
                                  type="button"
                                  class="btn btn-warning p-2"
                                >
                                  <Icon icon={eyeFill} />
                                </button>
                              </Link>
                            </div>
                          </TableCell>

                          <TableCell align="center">
                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic mixed styles example"
                            >
                              <Link
                                to={PATH_DASHBOARD.employee.uploadDocs}
                                state={{ data: row }}
                              >
                                <button
                                  type="button"
                                  class="btn btn-danger p-2"
                                >
                                  <Icon icon={uploadFill} />
                                </button>
                              </Link>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={employeeDetails.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
