// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"

// COMPONENTS IMPORTS //
import BarItem from "./BarItem/BarItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export interface PointType {
  date: number
  value: number
  color: string
}

interface PropsType {
  data: Array<PointType>
}

const { width: sWidth } = Dimensions.get("window")
const aspectRatio = 165 / 305
const width = sWidth - 25 * 2
const height = width * aspectRatio

const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1
}

const Graph: React.FC<PropsType> = (props) => {
  const values = props.data.map((item) => item.value)
  const dates = props.data.map((item) => item.date)
  const minX = Math.min(...dates)
  const maxX = Math.max(...dates)

  const minY = Math.min(...values)
  const maxY = Math.max(...values)

  const BORDER_RADIUS = 20
  return (
    <View style={styles.wrapper}>
      {props.data.map((point, index) => {
        if (point.value === 0) {
          return null
        }
        const step = width / props.data.length
        return <BarItem index={index} point={point} step={step} maxY={maxY} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width,
    height,
    alignSelf: "center",
    marginTop: 25,
  },
})

export default React.memo(Graph)
