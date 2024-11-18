import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations"; // Importing register action

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterSubmit = (values) => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => {
        navigate("/contacts"); // Redirect to contacts page on successful registration
      })
      .catch((error) => {
        console.error("Registration failed: ", error);
        // Optionally display a message about registration failure
      });
  };

  return (
    <div>
      <h1>Registration</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Required"),
        })}
        onSubmit={handleRegisterSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
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
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
