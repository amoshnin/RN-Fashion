// PLUGINS IMPORTS //
import React, { ReactNode } from "react"
import { View, Image, StyleSheet, Dimensions } from "react-native"
import { StatusBar } from "expo-status-bar"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  asset: any
}

const { width } = Dimensions.get("screen")
const aspectRation = 750 / 1125
const height = width * aspectRation
const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <StatusBar style={"light"} />
      <View style={styles.container}>
        <Image source={props.asset} style={styles.image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
  },

  container: {
    overflow: "hidden",
    height: height * 0.61,
    borderBottomLeftRadius: Theme.borderRadius.xl,
  },

  image: {
    width,
    height,
    borderBottomLeftRadius: Theme.borderRadius.xl,
  },
})

export default React.memo(Header)
