import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { FormikProvider, useFormik, Form } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@material-ui/lab';
import { TextField } from '@mui/material';
import { Card, Grid, Stack, FormHelperText } from '@material-ui/core';
import { UploadMultiFile } from '../../upload';
import { QuillEditor } from '../../editor';

// ---------------------------- Styled Components ----------------------------
import { styled } from '@material-ui/core/styles';
import EditProductCategoryAPI from '../API/EditProductCategoryAPI';
const LabelStyle = styled('div')(({ theme }) => ({
	...theme.typography.subtitle2,
	color: theme.palette.text.secondary,
	marginBottom: theme.spacing(1),
}));

// ---------------------------- PropTypes ----------------------------
EditProductModal.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func,
	product: PropTypes.object.isRequired, // current product to edit
	categories: PropTypes.array, // for category dropdown
	subcategories: PropTypes.array, // for subcategory dropdown
};

// ---------------------------- Component ----------------------------
export default function EditProductModal({
	show,
	handleClose,
	product,
	categories,
}) {
	const NewProductSchema = Yup.object().shape({
		productName: Yup.string().required('Product name is required'),
		description: Yup.string().required('Description is required'),
		priceSale: Yup.number()
			.required('Price is required')
			.positive('Price must be positive'),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			_id: product?._id || '',
			productName: product?.title || '',
			description: product?.description || '',
			priceSale: product?.priceSale || 0,
			images: product?.images || [],
			categoryId: '',
			subCategoryId: '',
			subCategoryName: '',
		},
		validationSchema: NewProductSchema,
		onSubmit: async (values, { setSubmitting }) => {
			await EditProductCategoryAPI(values);
			setSubmitting(false);
			handleClose(); // close modal after update
		},
	});

	const {
		values,
		touched,
		errors,
		handleSubmit,
		isSubmitting,
		setFieldValue,
		getFieldProps,
	} = formik;

	const handleDrop = useCallback(
		(acceptedFiles) => {
			setFieldValue(
				'images',
				acceptedFiles.map((file) =>
					Object.assign(file, { preview: URL.createObjectURL(file) })
				)
			);
		},
		[setFieldValue]
	);

	const handleRemoveAll = () => setFieldValue('images', []);

	const handleRemove = (file) =>
		setFieldValue(
			'images',
			values.images.filter((_file) => _file !== file)
		);

	console.log(values);
	return (
		<Modal show={show} onHide={handleClose} size='lg'>
			<Modal.Header closeButton>
				<Modal.Title>Edit Product</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<FormikProvider value={formik}>
					<Form noValidate autoComplete='off' onSubmit={handleSubmit}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Card sx={{ p: 3 }}>
									<Stack spacing={3}>
										<TextField
											fullWidth
											label='Product Name'
											{...getFieldProps('productName')}
											error={Boolean(touched.productName && errors.productName)}
											helperText={touched.productName && errors.productName}
										/>

										<div>
											<LabelStyle>Description</LabelStyle>
											<QuillEditor
												simple
												id='product-description'
												value={values.description}
												onChange={(val) => setFieldValue('description', val)}
												error={Boolean(
													touched.description && errors.description
												)}
											/>
											{touched.description && errors.description && (
												<FormHelperText error>
													{errors.description}
												</FormHelperText>
											)}
										</div>

										<TextField
											fullWidth
											type='number'
											label='Price'
											{...getFieldProps('priceSale')}
											error={Boolean(touched.priceSale && errors.priceSale)}
											helperText={touched.priceSale && errors.priceSale}
										/>

										<div>
											<LabelStyle>Category</LabelStyle>
											<select
												className='form-control'
												value={values.categoryId}
												onChange={(e) =>
													setFieldValue('categoryId', e.target.value)
												}
											>
												<option value=''>Select Category</option>
												{categories?.map((cat) => (
													<option key={cat._id} value={cat._id}>
														{cat.CategoryName}
													</option>
												))}
											</select>
										</div>

										<div>
											<LabelStyle>Subcategory</LabelStyle>
											<select
												className='form-control'
												value={values.subCategoryName}
												onChange={(e) =>
													setFieldValue('subCategoryId', e.target.value)
												}
											>
												<option value=''>Select Subcategory</option>
												{categories
													.filter((itex) => itex._id === values.categoryId)
													.map((sub) => {
														return (
															<>
																{sub.SubCategory.map((itt) => {
																	return (
																		<option key={itt._id} value={itt._id}>
																			{itt.subCategoryName}
																		</option>
																	);
																})}
															</>
														);
													})}
											</select>
										</div>

										<div>
											<LabelStyle>Images</LabelStyle>
											<UploadMultiFile
												showPreview
												maxSize={3145728}
												accept='image/*'
												files={values.images}
												onDrop={handleDrop}
												onRemove={handleRemove}
												onRemoveAll={handleRemoveAll}
											/>
										</div>

										<LoadingButton
											type='submit'
											fullWidth
											variant='outlined'
											size='large'
											loading={isSubmitting}
										>
											Update Product
										</LoadingButton>
									</Stack>
								</Card>
							</Grid>
						</Grid>
					</Form>
				</FormikProvider>
			</Modal.Body>
		</Modal>
	);
}
