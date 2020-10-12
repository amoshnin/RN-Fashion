// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const icons = [
  {
    image: require("~/Assets/Images/icons/facebook.png"),
    onPress: () => {},
  },
  {
    image: require("~/Assets/Images/icons/google.png"),
    onPress: () => {},
  },
  {
    image: require("~/Assets/Images/icons/apple.png"),
    onPress: () => {},
  },
]
const IconsSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      {icons.map((icon) => (
        <TouchableOpacity style={styles.icon_wrap} onPress={icon.onPress}>
          <Image source={icon.image} style={styles.icon} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const ICON_SIZE = 48
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 21,
  },

  icon_wrap: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },

  icon: {
    height: ICON_SIZE / 2.1,
    width: ICON_SIZE / 2.1,
  },
})

export default React.memo(IconsSection)
