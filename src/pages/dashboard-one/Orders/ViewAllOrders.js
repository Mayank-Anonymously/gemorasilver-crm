import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { useTheme, styled } from '@material-ui/core/styles';
import {
	Box,
	Card,
	Table,
	Button,
	TableRow,
	Checkbox,
	TableBody,
	TableCell,
	Container,
	Typography,
	TableContainer,
	TablePagination,
} from '@material-ui/core';
// utils
import { fDate } from 'src/utils/formatTime';
import { fCurrency } from 'src/utils/formatNumber';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// hooks
import useSettings from 'src/hooks/useSettings';
// components
import Page from 'src/components/Page';
import Label from 'src/components/Label';
import Scrollbar from 'src/components/Scrollbar';
import SearchNotFound from 'src/components/SearchNotFound';
import {
	ProductListHead,
	ProductListToolbar,
	ProductMoreMenu,
} from 'src/components/_dashboard/e-commerce/product-list';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import { host } from 'src/static';
import { GetAllOrders } from '../../../components/_dashboardone/API/GetAllOrders';
import OrderDetailsModal from './ViewOrderDetails';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
	{ id: 'orderId', label: 'Order ID', alignRight: false },
	{ id: 'title', label: 'Product', alignRight: false },
	{ id: 'priceSale', label: 'Price', alignRight: true },
	{ id: 'paymentMethod', label: 'Payment Method', alignRight: false },
	{ id: 'status', label: 'Status', alignRight: false },
	{ id: 'createdAt', label: 'Order Date', alignRight: false },
	{ id: '' }, // for action buttons (View / Edit / Delete)
];
const ThumbImgStyle = styled('img')(({ theme }) => ({
	width: 64,
	height: 64,
	objectFit: 'cover',
	margin: theme.spacing(0, 2),
	borderRadius: theme.shape.borderRadiusSm,
}));

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
	return order === 'desc'
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
			(_product) =>
				_product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
		);
	}

	return stabilizedThis.map((el) => el[0]);
}

// ------------------------------------------------------------------ ----

export default function ViewAllOrders() {
	const { themeStretch } = useSettings();
	const theme = useTheme();
	const [orders, setOrders] = useState([]);
	const [page, setPage] = useState(0);
	const [order, setOrder] = useState('asc');
	const [selected, setSelected] = useState([]);
	const [filterName, setFilterName] = useState('');
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [orderBy, setOrderBy] = useState('createdAt');
	const [selectedOrder, setSelectedOrder] = useState(null);
	const [showOrderModal, setShowOrderModal] = useState(false);
	useEffect(() => {
		GetAllOrders({ setOrders });
	}, []);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = orders.map((n) => n.name);
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

	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

	const filteredproduct = applySortFilter(
		orders,
		getComparator(order, orderBy),
		filterName
	);

	const isProductNotFound = filteredproduct.length === 0;

	const handleViewOrder = (order) => {
		setSelectedOrder(order);
		setShowOrderModal(true);
	};
	return (
		<Page title='Ecommerce: Orders List | Animatrix Store'>
			<Container maxWidth={themeStretch ? false : 'xxxl'}>
				<HeaderBreadcrumbs
					heading='Orders List'
					links={[
						{ name: 'Dashboard', href: PATH_DASHBOARD.root },
						{
							name: 'E-Commerce',
						},
						{ name: 'Orders List' },
					]}
					action={
						<Button
							variant='contained'
							component={RouterLink}
							to={PATH_DASHBOARD.eCommerce.newProduct}
							startIcon={<Icon icon={plusFill} />}
						>
							New Orders
						</Button>
					}
				/>
				{console.log(filteredproduct)}
				<Card>
					<ProductListToolbar
						numSelected={selected.length}
						filterName={filterName}
						onFilterName={handleFilterByName}
					/>

					<Scrollbar>
						<TableContainer sx={{ minWidth: 800 }}>
							<Table>
								<ProductListHead
									order={order}
									orderBy={orderBy}
									headLabel={TABLE_HEAD}
									rowCount={orders.length}
									numSelected={selected.length}
									onRequestSort={handleRequestSort}
									onSelectAllClick={handleSelectAllClick}
								/>
								<TableBody>
									{orders
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((order) => {
											const {
												orderId,
												items,
												paymentMethod,
												status,
												createdAt,
											} = order;

											const product = items[0]; // assuming one product per order for now
											const { title, image, priceSale } = product || {};

											return (
												<TableRow hover key={orderId}>
													<TableCell>{orderId}</TableCell>

													<TableCell>
														<Box sx={{ display: 'flex', alignItems: 'center' }}>
															<img
																src={`${host}resources/${image}`}
																alt={title}
																style={{
																	width: 60,
																	height: 60,
																	borderRadius: 8,
																	marginRight: 10,
																}}
															/>
															<Typography variant='subtitle2' noWrap>
																{title}
															</Typography>
														</Box>
													</TableCell>

													<TableCell align='right'>₹{priceSale}</TableCell>
													<TableCell align='left'>{paymentMethod}</TableCell>

													<TableCell>
														<Label
															color={
																status == 'COMPLETED'
																	? 'success'
																	: status == 'Pending'
																	? 'warning'
																	: 'error'
															}
														>
															{status}
														</Label>
													</TableCell>

													<TableCell>
														{new Date(createdAt).toLocaleDateString('en-IN', {
															day: '2-digit',
															month: 'short',
															year: 'numeric',
														})}
													</TableCell>

													<TableCell align='right'>
														{/* Example action */}
														<Button
															variant='outlined'
															size='small'
															onClick={() => handleViewOrder(order)}
														>
															View
														</Button>
													</TableCell>
												</TableRow>
											);
										})}
								</TableBody>

								{isProductNotFound && (
									<TableBody>
										<TableRow>
											<TableCell align='center' colSpan={6}>
												<Box sx={{ py: 3 }}>
													<SearchNotFound searchQuery={filterName} />
												</Box>
											</TableCell>
										</TableRow>
									</TableBody>
								)}
							</Table>
						</TableContainer>
					</Scrollbar>

					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component='div'
						count={orders.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Card>
			</Container>
			{selectedOrder && (
				<OrderDetailsModal
					open={showOrderModal}
					handleClose={() => setShowOrderModal(false)}
					order={selectedOrder}
				/>
			)}
		</Page>
	);
}
