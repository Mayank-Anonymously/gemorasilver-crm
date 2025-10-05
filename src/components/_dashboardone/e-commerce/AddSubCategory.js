import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack5';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import { styled } from '@material-ui/core/styles';
import { LoadingButton } from '@material-ui/lab';
import {
	Card,
	Grid,
	Stack,
	Typography,
	FormHelperText,
	MenuItem,
} from '@material-ui/core';
import { TextField } from '@mui/material';
import { QuillEditor } from '../../editor';
import { UploadMultiFile } from '../../upload';
import { AddCategoryAPI, AddSubCategoryAPI } from '../API/AddCategory';
import { GetAllCategory } from '../API/GetAllCategory'; // ✅ using your existing API

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
	...theme.typography.subtitle2,
	color: theme.palette.text.secondary,
	marginBottom: theme.spacing(1),
}));

AddSubCategoryNewForm.propTypes = {
	isEdit: PropTypes.bool,
	currentProduct: PropTypes.object,
};

// ----------------------------------------------------------------------

export default function AddSubCategoryNewForm({ isEdit, currentProduct }) {
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const [category, setCategory] = useState([]);

	// ✅ Fetch all categories from backend
	useEffect(() => {
		GetAllCategory({ setCategory });
	}, []);

	// ✅ Validation Schema
	const NewCategorySchema = Yup.object().shape({
		categoryId: Yup.string().required('Please select a category'),
		subCategoryName: Yup.string().required('Subcategory name is required'),
		description: Yup.string().required('Description is required'),
	});

	// ✅ Formik setup
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			categoryId: '',
			subCategoryName: '',
			description: '',
		},
		validationSchema: NewCategorySchema,
		onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
			try {
				await AddSubCategoryAPI(values); // You can point this to your “add subcategory” API endpoint

				resetForm();
				setSubmitting(false);
			} catch (error) {
				console.error(error);
				enqueueSnackbar('Error adding subcategory', { variant: 'error' });
				setSubmitting(false);
				setErrors(error);
			}
		},
	});

	const {
		errors,
		values,
		touched,
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

	return (
		<FormikProvider value={formik}>
			<Form noValidate autoComplete='off' onSubmit={handleSubmit}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={8} lg={12}>
						<Card sx={{ p: 3 }}>
							<Stack spacing={3}>
								{/* ✅ Select Existing Category */}
								<TextField
									select
									fullWidth
									label='Select Category'
									{...getFieldProps('categoryId')}
									error={Boolean(touched.categoryId && errors.categoryId)}
									helperText={touched.categoryId && errors.categoryId}
								>
									{category.map((cat) => (
										<MenuItem key={cat._id} value={cat._id}>
											{cat.CategoryName}
										</MenuItem>
									))}
								</TextField>

								{/* ✅ Subcategory Name */}
								<TextField
									fullWidth
									label='Subcategory Name'
									{...getFieldProps('subCategoryName')}
									error={Boolean(
										touched.subCategoryName && errors.subCategoryName
									)}
									helperText={touched.subCategoryName && errors.subCategoryName}
								/>

								{/* ✅ Description */}
								<div>
									<LabelStyle>Description</LabelStyle>
									<QuillEditor
										simple
										id='subcategory-description'
										value={values.description}
										onChange={(val) => setFieldValue('description', val)}
										error={Boolean(touched.description && errors.description)}
									/>
									{touched.description && errors.description && (
										<FormHelperText error sx={{ px: 2 }}>
											{touched.description && errors.description}
										</FormHelperText>
									)}
								</div>

								{/* ✅ Submit Button */}
								<LoadingButton
									type='submit'
									fullWidth
									variant='contained'
									size='large'
									loading={isSubmitting}
									sx={{
										backgroundColor: '#800000',
										'&:hover': { backgroundColor: '#a00000' },
									}}
								>
									Add Subcategory
								</LoadingButton>
							</Stack>
						</Card>
					</Grid>
				</Grid>
			</Form>
		</FormikProvider>
	);
}
