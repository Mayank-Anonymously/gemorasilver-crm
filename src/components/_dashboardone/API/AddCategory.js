import axios from "axios";
import { host } from "../../../static";
import swal from "sweetalert";
export const AddCategoryAPI = (values) => {
  const form = new FormData();
  form.append("CategoryName", values.name);
  form.append("CategoryDescription", values.description);
  form.append("SubCategory", []);
  form.append("image", values.images[0]);

  const options = {
    method: "POST",
    url: `${host}addCategory`,
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=---011000010111000001101001",
    },
    data: form,
  };
  axios
    .request(options)
    .then(function (result) {
      if (result.data.baseResponse.status === 1) {
        swal({
          title: "Category Created Successfully",
          text: "Your Category Created Successfully",
          icon: "success",
        });
      } else {
        swal({
          title: "Error",
          text: result.data.baseResponse.message,
          icon: "error",
          dangerMode: true,
        });
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
