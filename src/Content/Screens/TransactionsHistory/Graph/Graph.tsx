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
}

interface PropsType {
  data: Array<PointType>
}

const { width: sWidth } = Dimensions.get("window")
const aspectRatio = 165 / 305
const width = sWidth - 20 * 2
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

  return (
    <View style={styles.wrapper}>
      {props.data.map((point, index) => {
        if (point.value === 0) {
          return null
        }
        const step = width / props.data.length
        return (
          <View
            key={point.date}
            style={{
              position: "absolute",
              width: step,
              left: index * step,
              bottom: 0,
              backgroundColor: Theme.colors.primary,
              height: lerp(0, height, point.value / maxY),
            }}
          ></View>
        )
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
