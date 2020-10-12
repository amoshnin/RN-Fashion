// PLUGINS IMPORTS //
import React, { ReactNode } from "react"
import { View, Image, Platform, StyleSheet, Dimensions } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import Constants from "expo-constants"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

// EXTRA IMPORTS //
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

const patterns = [
  require("~/Assets/Images/patterns/pattern1.png"),
  require("~/Assets/Images/patterns/pattern2.png"),
  require("~/Assets/Images/patterns/pattern3.png"),
]

type PropsType = {
  children: ReactNode
  footer: ReactNode
  pattern: 0 | 1 | 2
}

const { height: wHeight, width } = Dimensions.get("screen")
const aspectRation = 750 / 1125
const height = width * aspectRation
const LayoutScreenWrapper: React.FC<PropsType> = (props) => {
  const asset = patterns[props.pattern || 0]
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    >
      <View style={styles.wrapper}>
        <Header asset={asset} />
        <View style={styles.overlay_wrapper}>
          <Image source={asset} style={styles.image} />
          <View style={styles.overlay}>{props.children}</View>
        </View>
        <Footer footer={props.footer} />
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height:
      wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0),
    backgroundColor: Theme.colors.secondary,
  },

  overlay_wrapper: {
    flex: 1,
    overflow: "hidden",
  },

  image: {
    width,
    height,
    ...StyleSheet.absoluteFillObject,
    top: -height * 0.61,
  },

  overlay: {
    flex: 1,
    borderRadius: Theme.borderRadius.xl,
    borderTopLeftRadius: 0,
    backgroundColor: "white",
  },
})

export default React.memo(LayoutScreenWrapper)
