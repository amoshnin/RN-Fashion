// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet, Dimensions } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

const picture = {
  src: require("~/Assets/Images/slides/5.png"),
  width: 3383,
  height: 5074,
}

const { width } = Dimensions.get("screen")
const Body = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={picture.src}
        style={[
          styles.picture,
          {
            height:
              ((width - Theme.borderRadius.xl) * picture.height) /
              picture.width,
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F4F0EF",
    borderBottomRightRadius: Theme.borderRadius.xl,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  picture: {
    width: width - Theme.borderRadius.xl,
  },
})

export default React.memo(Body)
