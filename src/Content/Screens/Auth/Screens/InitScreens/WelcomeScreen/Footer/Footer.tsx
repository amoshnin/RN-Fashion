// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { Text, Button } from "~/Content/Shared/Components/Components/Components"
import { useNavigation } from "@react-navigation/native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"
import { NavigationPropsTypes } from "~/Content/Shared/Helpers/Types/HelperTypes"
import { AuthStackTypes } from "~/Content/Shared/Helpers/Types/RoutesTypes"

/////////////////////////////////////////////////////////////////////////////

const Footer = () => {
  const navigation: NavigationPropsTypes<
    AuthStackTypes,
    "SliderScreen"
  > = useNavigation()

  return (
    <View style={styles.wrapper}>
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text
          size={24}
          lineHeight={30}
          fontFamily={"Semibold"}
          color={Theme.colors.secondary}
          isCenterAlign
        >
          Let's get started
        </Text>
        <Text
          size={16}
          color={Theme.colors.secondary}
          lineHeight={24}
          isCenterAlign
        >
          Login to your account below or signup for an amazing experience
        </Text>

        <View>
          <Button
            style={styles.button}
            variant={"Primary"}
            text={"Have an account? Login"}
            onPress={() => navigation.navigate("LoginScreen")}
          />
          <Button
            style={styles.button}
            text={"Join us, it's free"}
            onPress={() => navigation.navigate("RegisterScreen")}
          />
          <Button
            style={styles.button}
            variant={"Transparent"}
            text={"Forgot password?"}
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderBottomLeftRadius: Theme.borderRadius.xl,
  },

  overlay: {
    backgroundColor: Theme.colors.grey,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  content: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: Theme.borderRadius.xl,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  button: {
    marginVertical: 7,
  },
})

export default React.memo(Footer)
