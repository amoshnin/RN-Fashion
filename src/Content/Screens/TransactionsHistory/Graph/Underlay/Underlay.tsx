// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //
import { lerp } from "../Shared/utils"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  dates: Array<number>
  step: number

  maxY: number
  minY: number
}

const RAW_HEIGHT = 16
const formatter = Intl.DateTimeFormat("en", { month: "short" })
const Underlay: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {[1, 0.66, 0.33, 0].map((t) => {
          return (
            <View
              key={t}
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: RAW_HEIGHT,
                top: t === 0 ? RAW_HEIGHT / 2 : t === 1 ? -RAW_HEIGHT / 2 : 0,
              }}
            >
              <View style={{ width: 55, paddingLeft: 15 }}>
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
      <View
        style={{
          marginLeft: 61.5,
          height: 35,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {props.dates.map((date, index) => (
          <View style={{ width: props.step }}>
            <Text key={index} color={Theme.colors.darkGrey} isCenterAlign>
              {formatter.format(new Date(date))}
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
})

export default React.memo(Underlay)
