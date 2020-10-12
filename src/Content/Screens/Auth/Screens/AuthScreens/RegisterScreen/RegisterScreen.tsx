// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

// COMPONENTS IMPORTS //
import LayoutScreenWrapper from "~/Content/Shared/Components/Sections/LayoutScreenWrapper/LayoutScreenWrapper"
import Header from "./Header/Header"
import Form from "./Form/Form"

import SocialMediaFooter from "../../../Shared/SocialMediaFooter/SocialMediaFooter"

// EXTRA IMPORTS //
import { NavigationPropsTypes } from "~/Content/Shared/Helpers/Types/HelperTypes"
import { AuthStackTypes } from "~/Content/Shared/Helpers/Types/RoutesTypes"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: { params: any }
}

const RegisterScreen: React.FC<PropsType> = (props) => {
  const navigation: NavigationPropsTypes<
    AuthStackTypes,
    "RegisterScreen"
  > = useNavigation()
  const { setIsAuth } = props.route.params

  return (
    <LayoutScreenWrapper
      pattern={1}
      footer={
        <SocialMediaFooter
          content={{
            text: "Already have an account?",
            buttonText: "Login here",
            onPress: () => navigation.navigate("LoginScreen", {}),
          }}
        />
      }
    >
      <View style={styles.wrapper}>
        <Header />
        <Form setIsAuth={setIsAuth} />
      </View>
    </LayoutScreenWrapper>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 35,
    justifyContent: "center",
  },
})

export default React.memo(RegisterScreen)
