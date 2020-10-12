// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Animated from "react-native-reanimated"

// COMPONENTS IMPORTS //
import DotItem from "./DotItem/DotItem"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  indexesArray: Array<number>
  scrollOffset: Animated.SharedValue<number>
}

const PaginationSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      {props.indexesArray.map((index) => (
        <DotItem index={index} scrollOffset={props.scrollOffset} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    height: Theme.borderRadius.xl * 2,
    flexDirection: "row",
    justifyContent: "center",
    top: 35,
  },
})

export default React.memo(PaginationSection)
