// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Body from "./Body/Body"
import Footer from "./Footer/Footer"

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

const WelcomeScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Body />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})

export default React.memo(WelcomeScreen)
