// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"

// COMPONENTS IMPORTS //
import { lerp } from "../Shared/utils"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export interface PointType {
  date: number
  value: number
  color: string
}

interface PropsType {
  point: PointType

  index: number
  maxY: number
  step: number
  i: number
}

const { width: sWidth } = Dimensions.get("window")
const aspectRatio = 165 / 305
const width = sWidth - 25 * 2
const height = width * aspectRatio

const BarItem: React.FC<PropsType> = (props) => {
  const BORDER_RADIUS = 20

  return (
    <View
      key={props.point.date}
      style={[
        styles.wrapper,
        {
          width: props.step,
          left: props.i * props.step,
          height: lerp(0, height, props.point.value / props.maxY),
        },
      ]}
    >
      <View
        style={[
          styles.bar,
          {
            backgroundColor: props.point.color,
            borderTopRightRadius: BORDER_RADIUS,
            borderTopLeftRadius: BORDER_RADIUS,
          },
        ]}
      />
      <View
        style={[
          styles.bar_hat,
          { backgroundColor: props.point.color, borderRadius: BORDER_RADIUS },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
  },

  bar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 20,
    right: 10,
    opacity: 0.1,
  },

  bar_hat: {
    position: "absolute",
    top: 0,
    height: 32,
    left: 20,
    right: 10,
  },
})

export default React.memo(BarItem)
