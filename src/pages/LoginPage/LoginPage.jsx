import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations"; // Importing login action

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = (values) => {
    const { email, password } = values;
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/contacts"); // Redirect to contacts page on successful login
      })
      .catch((error) => {
        console.error("Login failed: ", error);
        // Optionally display a message about login failure
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Required"),
        })}
        onSubmit={handleLoginSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
