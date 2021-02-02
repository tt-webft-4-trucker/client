import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string()
    .email("Please provide a valid email")
    .required("Please provide a valid email")
    .min(6, "email must be at least 6 characters long"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Passwords must be at least 4 characters long"),
});
