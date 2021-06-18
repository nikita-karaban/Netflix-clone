import React from "react";
import {Footer, Header} from "../components";
import Form from "../components/Form/Form";
import {Base, Error, Input, Link, Submit, Text, TextSmall, Title} from "../components/Form/style";
import { Formik } from 'formik';
import * as yup from 'yup';
import * as ROUTES from "../constants/routes";

export default function SignIn() {
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
    <>
      <Header>
        <Form>
          <Title>Sign In</Title>
          <Formik initialValues={{
            email: '',
            password: ''
          }}      validateOnBlur
                  onSubmit={(values) => {console.log(values)}}
                  validationSchema={validationSchema}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, dirty, isValid
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
          <Text>New to Netflix <Link to={ROUTES.SIGN_UP}>Sign up now</Link></Text>
          <TextSmall><span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span></TextSmall>
        </Form>
      </Header>
      <Footer />
    </>
  )
}

