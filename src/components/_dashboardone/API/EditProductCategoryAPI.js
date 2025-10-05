import axios from 'axios';
import { host } from 'src/static';
import swal from 'sweetalert';

const EditProductCategoryAPI = async (values) => {
	try {
		const response = await axios.post(
			`${host}product/updateProductCategoryId/${values._id}`,
			{
				productName: values.productName,
				description: values.description,
				price: values.price,
				images: values.images, // array of image URLs
				categoryId: values.subCategoryId,
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
