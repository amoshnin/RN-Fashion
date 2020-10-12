// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { TextInput } from "~/Content/Shared/Components/Components/Components"
import { Formik } from "formik"
import * as yup from "yup"

// COMPONENTS IMPORTS //
import Footer from "./Footer/Footer"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  setIsAuth: (authStatus: boolean) => void
}

const Form: React.FC<PropsType> = (props) => {
  const ValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email")
      .typeError("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Too short password"),
  })
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          email: undefined,
          password: undefined,
          remember: false,
        }}
        onSubmit={(values) => {
          props.setIsAuth(true)
        }}
        validationSchema={ValidationSchema}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder={"Enter your email"}
              icon={"mail"}
              value={FormikProps.values.email}
              onChangeText={FormikProps.handleChange("email")}
              onBlur={FormikProps.handleBlur("email")}
              error={FormikProps.errors.email}
              touched={FormikProps.touched.email}
              autoCompleteType={"email"}
              keyboardType={"email-address"}
            />
            <TextInput
              placeholder={"Enter your password"}
              icon={"lock"}
              value={FormikProps.values.password}
              onChangeText={FormikProps.handleChange("password")}
              onBlur={FormikProps.handleBlur("password")}
              error={FormikProps.errors.password}
              touched={FormikProps.touched.password}
              isPassword
            />

            <Footer
              handleSubmit={FormikProps.handleSubmit}
              checkValue={FormikProps.values.remember}
              setFieldValue={FormikProps.setFieldValue}
            />
          </>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 33,
    justifyContent: "center",
  },
})

export default React.memo(Form)
