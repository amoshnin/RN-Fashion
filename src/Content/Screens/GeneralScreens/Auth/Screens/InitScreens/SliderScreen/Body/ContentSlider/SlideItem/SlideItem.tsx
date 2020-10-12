// PLUGINS IMPORTS //
import React from "react"
import { View, Dimensions, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"

// COMPONENTS IMPORTS //
import { SlideItemType } from "../../../Data/Data"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  slide: SlideItemType
  rightAlign?: boolean
}

const { width, height } = Dimensions.get("window")
export const SLIDE_HEIGHT = 0.61 * height
const SlideItem: React.FC<PropsType> = (props) => {
  const transform = [
    {
      translateY: (SLIDE_HEIGHT - 100) / 2,
    },
    {
      translateX: props.rightAlign ? width / 2 - 50 : -width / 2 + 50,
    },
    {
      rotate: props.rightAlign ? "-90deg" : "90deg",
    },
  ]

  return (
    <View style={styles.wrapper}>
      <View style={[styles.title_wrap, { transform }]}>
        <Text
          size={80}
          lineHeight={80}
          color={"white"}
          fontFamily={"Bold"}
          isCenterAlign
        >
          {props.slide.label}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { width },

  title_wrap: {
    height: 100,
    justifyContent: "center",
  },
})

export default SlideItem
