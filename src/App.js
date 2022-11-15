import React from "react";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";

const App = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      country: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(25, "Full Name must be less than or equal to 25 char")
        .required("This field mush be required "),
      email: Yup.string()
        .email("Please Provide Valid Email")
        .required("This field mush be required "),
      password: Yup.string()
        .min(6, "password  must be equal or greater than 6 char")
        .required("This field mush be required "),
      country: Yup.string().required("This field mush be required "),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container w-50">
      <form onSubmit={formik.handleSubmit}>
        <h1 className=" m-4">SignUp Form</h1>
        <div className="form-group m-4">
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            className="form-control"
            placeholder="Enter name"
            onChange={formik.handleChange}
            value={formik.values.fullname}
          />
          <span className="text-danger">{formik.errors.fullname}</span>
        </div>
        <div className="form-group m-4">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter email"
          />
          <span className="text-danger">{formik.errors.email}</span>
        </div>
        <div className="form-group m-4  ">
          <label>Password</label>
          <input
            name="password"
            value={formik.values.password}
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            placeholder="Enter Password"
          />
          <span className="text-danger">{formik.errors.password}</span>
        </div>

        <div className="form-group m-4  ">
          <label>Country</label>
          <select
            className="form-control"
            name="country"
            onChange={formik.handleChange}
          >
            <option value="">select Country</option>
            <option value="india">India</option>
            <option value="pakistan">Pakistan</option>
            <option value="srilanka">SriLanka</option>
            <option value="bangladesh">Bangladesh</option>
          </select>
          <span className="text-danger">{formik.errors.country}</span>
        </div>
        <button type="submit" className="btn btn-primary m-4">
          Submit
        </button>
      </form>
    </div>
  );
};
export default App;
