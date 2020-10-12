// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import {
  TextInput,
  Button,
} from "~/Content/Shared/Components/Components/Components"
import { Formik } from "formik"
import * as yup from "yup"
import { useNavigation } from "@react-navigation/native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { NavigationPropsTypes } from "~/Content/Shared/Helpers/Types/HelperTypes"
import { AuthStackTypes } from "~/Content/Shared/Helpers/Types/RoutesTypes"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Form: React.FC<PropsType> = (props) => {
  const navigation: NavigationPropsTypes<
    AuthStackTypes,
    "ChangePassSuccessScreen"
  > = useNavigation()

  const ValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email")
      .typeError("Email is required"),
  })
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          email: undefined,
        }}
        onSubmit={(values) => navigation.navigate("ChangePassSuccessScreen")}
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

            <Button
              text={"Reset password"}
              variant={"Primary"}
              style={styles.button}
              onPress={FormikProps.handleSubmit}
              isCenterAlign
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

  button: {
    marginTop: 30,
  },
})

export default React.memo(Form)
