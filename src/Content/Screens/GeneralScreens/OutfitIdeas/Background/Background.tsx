// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Background: React.FC<PropsType> = (props) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={[styles.container, { backgroundColor: "#BFEAF5" }]}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderBottomRightRadius: Theme.borderRadius.xl,
          }}
        />
      </View>

      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: "white" }} />
        <View style={{ flex: 1, backgroundColor: Theme.colors.secondary }} />

        <Image
          source={require("~/Assets/Images/background.png")}
          style={styles.image}
        />
      </View>
      <View style={[styles.container, { backgroundColor: "#BFEAF5" }]}>
        <View
          style={{
            flex: 1,
            backgroundColor: Theme.colors.secondary,
            borderTopLeftRadius: Theme.borderRadius.xl,
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: Theme.borderRadius.xl,
    borderBottomRightRadius: Theme.borderRadius.xl,
  },
})

export default React.memo(Background)
