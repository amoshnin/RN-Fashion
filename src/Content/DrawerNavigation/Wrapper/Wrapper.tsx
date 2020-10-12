// PLUGINS IMPORTS //
import React, { ReactNode } from "react"
import { View, Image, Text, StyleSheet, Dimensions } from "react-native"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"
import { SafeAreaView } from "react-native-safe-area-context"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

const { width } = Dimensions.get("screen")
export const DRAWER_WIDTH = width * 0.9
const aspectRation = 750 / 1125
const height = DRAWER_WIDTH * aspectRation

interface PropsType {
  header: ReactNode
  children: ReactNode
}

const Wrapper: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View
          style={[
            styles.overlay,
            {
              backgroundColor: Theme.colors.secondary,
              borderBottomRightRadius: Theme.borderRadius.xl,
            },
          ]}
        >
          <SafeAreaView>{props.header}</SafeAreaView>
        </View>
      </View>
      <View style={{ flex: 0.8 }}>
        <View style={{ flex: 1, backgroundColor: Theme.colors.secondary }} />
        <View style={[styles.content_wrap, styles.overlay]}>
          {props.children}
        </View>
      </View>

      <View style={styles.footer_wrap}>
        <Image
          source={require("~/Assets/Images/drawer.png")}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: Theme.borderRadius.xl,
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    flex: 0.2,
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  content_wrap: {
    backgroundColor: "white",
    borderTopLeftRadius: Theme.borderRadius.xl,
    borderBottomRightRadius: Theme.borderRadius.xl,
    justifyContent: "center",
  },

  footer_wrap: { width: DRAWER_WIDTH, height: height * 0.5 },
})

export default React.memo(Wrapper)
