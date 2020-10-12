// PLUGINS IMPORTS //
import React from "react"
import { Image, StyleSheet, Dimensions } from "react-native"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const { width } = Dimensions.get("screen")
const Footer: React.FC<PropsType> = (props) => {
  return (
    <Image
      style={styles.wrapper}
      source={require("~/Assets/Images/background.png")}
    />
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: Theme.borderRadius.xl,
    height: 130,
    width,
  },
})

export default React.memo(Footer)
