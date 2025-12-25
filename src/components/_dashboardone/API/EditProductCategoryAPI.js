import axios from 'axios';
import { host } from 'src/static';
import swal from 'sweetalert';

const EditProductCategoryAPI = async (values) => {
	try {
		const form = new FormData();

		form.append('productName', values.productName);
		form.append('description', values.description);
		form.append('priceSale', values.priceSale);
		form.append('categoryId', values.subCategoryId);

		// Append images (supporting both old and new)
		values.images.forEach((image) => {
			// If image is a File object (new upload), upload it
			if (image instanceof File) {
				form.append('image', image);
			} else if (typeof image === 'string') {
				// If image is an existing filename, keep it
				form.append('existingImages', image); // Backend should handle this field
			}
		});

		const response = await axios.post(
			`${host}product/updateProductCategoryId/${values._id}`,
			form,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);

		if (response.data.success) {
			swal('Success', response.data.message, 'success');
		} else {
			swal('Error', response.data.message, 'error');
		}
	} catch (err) {
		console.error('❌ Error updating product:', err);
		swal('Error', 'Failed to update product', 'error');
	}
};

export default EditProductCategoryAPI;
