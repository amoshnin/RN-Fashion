// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import {
  Text,
  Button,
  Checkbox,
} from "~/Content/Shared/Components/Components/Components"
import { useNavigation } from "@react-navigation/native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"
import { NavigationPropsTypes } from "~/Content/Shared/Helpers/Types/HelperTypes"
import { AuthStackTypes } from "~/Content/Shared/Helpers/Types/RoutesTypes"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  checkValue: boolean
  handleSubmit: () => void
  setFieldValue: (fieldName: string, newValue: boolean | string) => void
}

const Footer: React.FC<PropsType> = (props) => {
  const navigation: NavigationPropsTypes<
    AuthStackTypes,
    "SliderScreen"
  > = useNavigation()

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttons_wrap}>
        <View style={styles.checkbox_wrap}>
          <Checkbox
            value={props.checkValue}
            onChange={(newValue) => props.setFieldValue("remember", newValue)}
          />
          <Text style={styles.checkbox_text} fontFamily={"Semibold"}>
            Remember me
          </Text>
        </View>
        <Text
          color={Theme.colors.primary}
          fontFamily={"Semibold"}
          onPress={() => navigation.navigate("ChangePassScreen")}
        >
          Forgot password
        </Text>
      </View>

      <Button
        text={"Log into your account"}
        variant={"Primary"}
        style={styles.button}
        onPress={props.handleSubmit}
        isCenterAlign
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 25,
  },

  buttons_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  checkbox_wrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox_text: {
    marginLeft: 11,
  },

  button: {
    marginTop: 30,
  },
})

export default React.memo(Footer)
