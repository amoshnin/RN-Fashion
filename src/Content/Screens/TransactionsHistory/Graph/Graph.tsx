// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"

// COMPONENTS IMPORTS //
import Underlay from "./Underlay/Underlay"
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
const canvasWidth = sWidth - 25 * 2
const canvasHeight = canvasWidth * aspectRatio

const width = canvasWidth - 30
const height = canvasHeight - 30

const Graph: React.FC<PropsType> = (props) => {
  const values = props.data.map((item) => item.value)
  const dates = props.data.map((item) => item.date)
  const maxY = Math.max(...values)
  const minY = Math.min(...values)
  const step = width / props.data.length

  return (
    <View style={styles.wrapper}>
      <Underlay dates={dates} step={step} minY={minY} maxY={maxY} />
      <View style={styles.bars_wrap}>
        {props.data.map((point, index) => {
          if (point.value === 0) {
            return null
          }
          return <BarItem index={index} point={point} step={step} maxY={maxY} />
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    paddingBottom: 35,
    paddingLeft: 35,
  },

  bars_wrap: {
    width,
    height,
    alignSelf: "center",
    marginTop: 50,
  },
})

export default React.memo(Graph)
