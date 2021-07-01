import React from 'react';
import {Formik} from "formik";
import {Base, Error, Input, Submit} from "../Form/style";
import {AuthForm} from "../index";
import * as yup from "yup";
import Form from "../Form/Form";
import {fetchUserPost} from "../../redux/actions";
import {useDispatch} from "react-redux";

function SignUpForm(props) {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().typeError(`Должно быть стокой`).email().required(`Please Enter your Email`),
    password: yup
      .string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    name: yup.string().required(`Please Enter your Full name`)
  })

  return (

    <Form>
      <AuthForm title={`Sign Up`}>
        <Formik initialValues={{
          name: '',
          email: '',
          password: ''
        }} validateOnBlur
                onSubmit={(values) => {
                  console.log(values)
                  dispatch(fetchUserPost(values))
                }}
                validationSchema={validationSchema}>
          {({
              values, errors, touched, handleChange, handleBlur, handleSubmit, dirty, isValid
            }) => (
            <Base>
              <Input
                type={`text`}
                name={`name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder={`Name`}
              />
              {touched.name && errors.name && <Error>{errors.name}</Error>}
              <Input
                type={`email`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={`Email`}
              />
              {touched.email && errors.email && <Error>{errors.email}</Error>}
              <Input
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder={`Password`}
              />
              {touched.password && errors.password && <Error>{errors.password}</Error>}
              <Submit disabled={!isValid && !dirty}
                      onClick={handleSubmit}
                      type={`submit`}
              >Sign Up</Submit>
            </Base>
          )}
        </Formik>
      </AuthForm>
    </Form>
  );
}

export default SignUpForm;