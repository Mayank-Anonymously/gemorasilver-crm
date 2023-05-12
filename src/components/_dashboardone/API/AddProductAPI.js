import { host } from "../../../static";
import axios from "axios";
import swal from "sweetalert";
export const AddProductAPI = (values) => {
  // const description = new Blob([values.description], {
  //   type: "text/xml",
  // });

  const form = new FormData();
  form.append("title", values.name);
  form.append("description", values.description);
  form.append("price", values.price);
  form.append("priceSale", values.priceSale);
  form.append("categoryId", values.categoryId);
  form.append("categoryName", values.categoryName);
  form.append("productSku", values.sku);
  form.append("productCode", values.code);
  form.append("inStock", values.inStock);
  form.append("image", values.images[0]);
  form.append("quantity", values.quantity);
  form.append("stockQuantity", values.stockQuantity);

  const options = {
    method: "POST",
    url: `${host}addProduct`,
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=---011000010111000001101001",
    },
    data: form,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      if (response.data.baseResponse.status === 1) {
        swal({
          title: "Product Created Successfully",
          text: "Your Product Created Successfully",
          icon: "success",
        });
      } else {
        swal({
          title: "Error",
          text: response.data.baseResponse.message,
          icon: "error",
          dangerMode: true,
        });
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
