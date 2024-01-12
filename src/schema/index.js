import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("Tên không được bỏ trống"),
    // lastName: yup.string().required("Last Name is required"),
    address: yup.string().required("Địa chỉ không được bỏ trống"),
    // compName: yup.string().required("First Name is required"),
    phone: yup.string().required("Số điện thoại không được bỏ trống"),
    email: yup.string().required("Email không được bỏ trống"),
    city: yup.string().required("Tỉnh/Thành phố không được bỏ trống"),

});

export default schema;
