import * as Yup from "yup";

export default Yup.object().shape({
  username: Yup.string()
    .required("Please provide a valid username")
    .min(6, "Usernames must be at least 6 characters long"),
  email: Yup.string()
    .email("Please provide a valid email address")
    .required("Please provide an email address"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Passwords must be at least 4 characters long"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  role: Yup.string().oneOf(["diner", "operator"], "type is required"),
});
