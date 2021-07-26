import React from 'react';
import {Formik} from "formik";
import {Base, Error, Input, Submit} from "../Form/style";
import {AuthForm} from "../index";
import * as yup from "yup";
import Form from "../Form/Form";
import {userLogin} from "../../redux/actions";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";


function SignInForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();


  const validationSchema = yup.object().shape({
    email: yup.string().typeError(`Должно быть стокой`).email().required(`Please Enter your Email`),
    password: yup
      .string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
  })

  return (
    <Form>
      <AuthForm title={`Sign In`}>

        <Formik initialValues={{
          email: '',
          password: ''
        }} validateOnBlur
                onSubmit={ (values) => {
                  dispatch(userLogin(values, history))
                }}
                validationSchema={validationSchema}>
          {({
              values, errors, touched, handleChange, handleBlur, handleSubmit, dirty, isValid
            }) => (
            <Base>
              <Input
                type={`email`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder={`Email`}
              />
              {touched.email && errors.email && <Error>{errors.email}</Error>}
              <Input
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder={`Password`}
              />
              {touched.password && errors.password && <Error>{errors.password}</Error>}
              <Submit disabled={!isValid && !dirty}
                      onClick={handleSubmit}
                      type={`submit`}
              >Sign In</Submit>
            </Base>
          )}
        </Formik>
      </AuthForm>

    </Form>
  );
}

export default SignInForm;