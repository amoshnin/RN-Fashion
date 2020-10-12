// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //

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
}

const { width: sWidth } = Dimensions.get("window")
const aspectRatio = 165 / 305
const width = sWidth - 25 * 2
const height = width * aspectRatio

const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1
}

const BarItem: React.FC<PropsType> = (props) => {
  const BORDER_RADIUS = 20

  return (
    <View
      key={props.point.date}
      style={{
        position: "absolute",
        width: props.step,
        left: props.index * props.step,
        bottom: 0,
        height: lerp(0, height, props.point.value / props.maxY),
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 20,
          right: 10,
          opacity: 0.1,
          backgroundColor: props.point.color,
          borderTopRightRadius: BORDER_RADIUS,
          borderTopLeftRadius: BORDER_RADIUS,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          height: 32,
          left: 20,
          right: 10,
          backgroundColor: props.point.color,
          borderRadius: BORDER_RADIUS,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default React.memo(BarItem)
