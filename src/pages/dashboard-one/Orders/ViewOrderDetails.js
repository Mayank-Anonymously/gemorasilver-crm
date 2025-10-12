// src/components/_dashboardone/Order/OrderDetailsModal.js
import React from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	Typography,
	Box,
	Grid,
	Divider,
} from '@material-ui/core';

import { fDate } from 'src/utils/formatTime';

export default function OrderDetailsModal({ open, handleClose, order }) {
	if (!order) return null;

	const {
		orderId,
		status,
		createdAt,
		items,
		total,
		paymentMethod,
		shippingAddress,
		billingAddress,
	} = order;

	return (
		<Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
			<DialogTitle>Order Details - #{orderId}</DialogTitle>
			<DialogContent dividers>
				<Typography variant='subtitle1'>Status: {status}</Typography>
				<Typography variant='subtitle2' gutterBottom>
					Order Date: {fDate(createdAt.$date || createdAt)}
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Typography variant='h6'>Shipping Address</Typography>
						<Typography>{shippingAddress.name}</Typography>
						<Typography>{shippingAddress.street}</Typography>
						<Typography>
							{shippingAddress.city}, {shippingAddress.state} -{' '}
							{shippingAddress.zip}
						</Typography>
						<Typography>{shippingAddress.country}</Typography>
						<Typography>Phone: {shippingAddress.phone}</Typography>
					</Grid>

					<Grid item xs={12} md={6}>
						<Typography variant='h6'>Billing Address</Typography>
						<Typography>{billingAddress.name}</Typography>
						<Typography>{billingAddress.street}</Typography>
						<Typography>
							{billingAddress.city}, {billingAddress.state} -{' '}
							{billingAddress.zip}
						</Typography>
						<Typography>{billingAddress.country}</Typography>
						<Typography>Phone: {billingAddress.phone}</Typography>
					</Grid>
				</Grid>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h6' gutterBottom>
					Items
				</Typography>
				{items.map((item, idx) => (
					<Box key={idx} sx={{ mb: 2 }}>
						<Typography>
							<strong>{item.title}</strong>
						</Typography>
						<Typography variant='body2'>SKU: {item.productSku}</Typography>
						<Typography variant='body2'>Qty: {item.quantity}</Typography>
						<Typography variant='body2'>Price: ₹{item.price}</Typography>
					</Box>
				))}

				<Divider sx={{ my: 2 }} />

				<Grid container justifyContent='space-between'>
					<Grid item>
						<Typography variant='subtitle1'>Payment Method</Typography>
						<Typography>{paymentMethod.toUpperCase()}</Typography>
					</Grid>
					<Grid item>
						<Typography variant='subtitle1'>Total</Typography>
						<Typography variant='h6'>₹{total}</Typography>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);
}
