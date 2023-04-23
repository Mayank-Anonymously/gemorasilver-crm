import * as Yup from "yup";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack5";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// material
import { styled } from "@material-ui/core/styles";
import { LoadingButton } from "@material-ui/lab";
import {
  Card,
  Chip,
  Grid,
  Stack,
  Radio,
  Switch,
  Select,
  InputLabel,
  Typography,
  RadioGroup,
  FormControl,
  Autocomplete,
  InputAdornment,
  FormHelperText,
  FormControlLabel,
} from "@material-ui/core";
// utils
import fakeRequest from "../../../utils/fakeRequest";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
//
import { QuillEditor } from "../../editor";
import { UploadMultiFile } from "../../upload";
import { AddCategoryAPI } from "../API/AddCategory";
import { TextField } from "@mui/material";

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------

CategoryNewForm.propTypes = {
  isEdit: PropTypes.bool,
  currentProduct: PropTypes.object,
};

export default function CategoryNewForm({ isEdit, currentProduct }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    // images: Yup.array().min(1, "Images is required"),
    // price: Yup.number().required("Price is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: currentProduct?.name || "",
      description: currentProduct?.description || "",
      images: currentProduct?.images || [],
      //   subCat: "",
      //   sku: currentProduct?.sku || "",
      //   price: currentProduct?.price || "",
      //   priceSale: currentProduct?.priceSale || "",
      //   tags: currentProduct?.tags || [TAGS_OPTION[0]],
      //   inStock: Boolean(currentProduct?.inventoryType !== "out_of_stock"),
      //   taxes: true,
      //   gender: currentProduct?.gender || GENDER_OPTION[2],
      //   category: currentProduct?.category || CATEGORY_OPTION[0].classify[1],
    },
    validationSchema: NewProductSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        resetForm();
        setSubmitting(false);
        await AddCategoryAPI(values);
      } catch (error) {
        console.error(error);
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
        "images",
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFieldValue]
  );

  const handleRemoveAll = () => {
    setFieldValue("images", []);
  };

  const handleRemove = (file) => {
    const filteredItems = values.images.filter((_file) => _file !== file);
    setFieldValue("images", filteredItems);
  };

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Category Name"
                  {...getFieldProps("name")}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />

                <div>
                  <LabelStyle>Description</LabelStyle>
                  <QuillEditor
                    simple
                    id="category-description"
                    value={values.description}
                    onChange={(val) => setFieldValue("description", val)}
                    error={Boolean(touched.description && errors.description)}
                  />
                  {touched.description && errors.description && (
                    <FormHelperText error sx={{ px: 2 }}>
                      {touched.description && errors.description}
                    </FormHelperText>
                  )}
                </div>

                <div>
                  <LabelStyle>Add Images</LabelStyle>
                  <UploadMultiFile
                    showPreview
                    maxSize={3145728}
                    accept="image/*"
                    files={values.images}
                    onDrop={handleDrop}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                    error={Boolean(touched.images && errors.images)}
                  />
                  {touched.images && errors.images && (
                    <FormHelperText error sx={{ px: 2 }}>
                      {touched.images && errors.images}
                    </FormHelperText>
                  )}
                </div>
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="outlined"
                  size="large"
                  loading={isSubmitting}
                >
                  {"Create Category"}
                </LoadingButton>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
