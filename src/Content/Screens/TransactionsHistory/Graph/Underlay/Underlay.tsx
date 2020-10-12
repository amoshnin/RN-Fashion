// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"
import moment from "moment"

// COMPONENTS IMPORTS //
import { lerp } from "../Shared/utils"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  step: number

  maxY: number
  minY: number

  startDate: number
  numberOfMonths: number
}

const RAW_HEIGHT = 16
const Underlay: React.FC<PropsType> = (props) => {
  const minDate = moment(props.startDate)

  return (
    <View style={styles.wrapper}>
      <View style={styles.yAxis_wrap}>
        {[1, 0.66, 0.33, 0].map((t) => {
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
                  color={Theme.colors.darkGrey}
                  style={{ textAlign: "right" }}
                >
                  {Math.round(lerp(props.minY, props.maxY, t))}
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: Theme.colors.grey,
                }}
              />
            </View>
          )
        })}
      </View>
      <View style={styles.xAxis_wrap}>
        {new Array(props.numberOfMonths)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, "month"))
          .map((date, index) => (
            <View key={index} style={{ width: props.step }}>
              <Text key={index} color={Theme.colors.darkGrey} isCenterAlign>
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
})

export default React.memo(Underlay)
