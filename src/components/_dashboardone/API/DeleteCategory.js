import axios from "axios";
import { host } from "src/static";
import swal from "sweetalert";

const DeleteCategory = (cId) => {
  const options = {
    method: "PATCH",
    url: `${host}deleteCategory/${cId}`,
  };

  axios
    .request(options)
    .then(function (response) {
      if (response.data.baseResponse.status === 1) {
        swal({
          title: "Success",
          text: response.data.baseResponse.message,
          icon: "success",
        });
        window.location.reload();
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

export default DeleteCategory;
