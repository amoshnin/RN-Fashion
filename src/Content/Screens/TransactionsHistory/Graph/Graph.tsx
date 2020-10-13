// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import moment from "moment"

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
  startDate: number
  //
  numberOfMonths?: number
  numberOfRanges?: number
  //
  width?: number
  height?: number
}

const windowWidth = Dimensions.get("window").width
const Graph: React.FC<PropsType> = (props) => {
  const {
    numberOfMonths = 6,
    numberOfRanges = 4,
    width: propWidth,
    height: propHeight,
  } = props

  const width = (propWidth || windowWidth) - 80
  const height = (propHeight || 197) - 30

  const values = props.data.map((item) => item.value)
  const maxY = Math.max(...values)
  const minY = Math.min(...values)
  const step = width / numberOfMonths

  return (
    <View style={styles.wrapper}>
      <Underlay
        step={step}
        minY={minY}
        maxY={maxY}
        startDate={props.startDate}
        numberOfMonths={numberOfMonths}
        numberOfRanges={numberOfRanges}
      />
      <View style={[styles.bars_wrap, { width, height }]}>
        {props.data.map((point, index) => {
          const i = Math.round(
            moment.duration(moment(point.date).diff(props.startDate)).asMonths()
          )

          if (point.value === 0) {
            return null
          }
          return (
            <BarItem
              key={point.value}
              index={index}
              point={point}
              step={step}
              maxY={maxY}
              i={i}
            />
          )
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
    alignSelf: "center",
    marginTop: 50,
  },
})

export default React.memo(Graph)
