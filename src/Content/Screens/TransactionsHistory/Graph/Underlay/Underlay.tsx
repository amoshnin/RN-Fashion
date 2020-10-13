// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"
import moment from "moment"

// COMPONENTS IMPORTS //
import { lerp } from "../Shared/utils"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export interface yAxisStyleType {
  wrap: ViewStyle
  text: TextStyle
}

export interface xAxisStyleType {
  wrap: ViewStyle
  text: TextStyle
}

export interface LinesConfigStyle {
  visible: boolean
  style: ViewStyle
}

interface PropsType {
  step: number

  maxY: number
  minY: number

  startDate: number
  //
  numberOfMonths: number
  numberOfRanges: number
  //
  yAxisStyle?: yAxisStyleType
  xAxisStyle?: xAxisStyleType
  linesConfig?: LinesConfigStyle
}

const RAW_HEIGHT = 16
const Underlay: React.FC<PropsType> = (props) => {
  const minDate = moment(props.startDate)

  const ranges = [...Array(props.numberOfRanges + 1)]
    .map((_, i) => 1 / i)
    .filter((e) => e !== Infinity)

  return (
    <View style={styles.wrapper}>
      <View style={[styles.yAxis_wrap, props.yAxisStyle?.wrap]}>
        {ranges.map((t) => {
          return (
            <View
              key={t}
              style={[
                styles.item_wrap,
                {
                  top: t === 0 ? RAW_HEIGHT / 2 : t === 1 ? -RAW_HEIGHT / 2 : 0,
                },
              ]}
            >
              <View style={styles.item_content}>
                <Text
                  style={{ ...styles.yAxisText, ...props.yAxisStyle?.text }}
                  color={Theme.colors.darkGrey}
                >
                  {Math.round(lerp(props.minY, props.maxY, t))}
                </Text>
              </View>

              {(props.linesConfig === undefined
                ? true
                : props.linesConfig.visible) && (
                <View style={[styles.line, props.linesConfig?.style]} />
              )}
            </View>
          )
        })}
      </View>
      <View style={styles.xAxis_wrap}>
        {new Array(props.numberOfMonths)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, "month"))
          .map((date, index) => (
            <View
              key={index}
              style={[props.xAxisStyle?.wrap, { width: props.step }]}
            >
              <Text
                key={index}
                style={props.xAxisStyle?.text}
                color={Theme.colors.darkGrey}
                isCenterAlign
              >
                {date.format("MMM")}
              </Text>
            </View>
          ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    ...(StyleSheet.absoluteFill as any),
  },

  item_wrap: {
    flexDirection: "row",
    alignItems: "center",
    height: RAW_HEIGHT,
  },

  item_content: {
    width: 55,
    paddingLeft: 15,
  },

  yAxis_wrap: { flex: 1, justifyContent: "space-between" },

  xAxis_wrap: {
    marginLeft: 61.5,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
  },

  yAxisText: { textAlign: "right" },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: Theme.colors.grey,
  },
})

export default React.memo(Underlay)
