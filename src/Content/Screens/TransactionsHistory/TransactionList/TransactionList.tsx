// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, View, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"

// COMPONENTS IMPORTS //
import { PointType } from "../Graph/Graph"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  data: Array<PointType>
}

const monthFormat = Intl.DateTimeFormat("en", { month: "long" })
const dayFormat = Intl.DateTimeFormat("en", { day: "numeric" })
const yearFormat = Intl.DateTimeFormat("en", { year: "numeric" })

const TransactionsList: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      {props.data.map((item) => {
        return (
          <View style={[styles.item_wrap, styles.row]}>
            <View>
              <View style={[styles.row, styles.title_wrap]}>
                <View
                  style={[styles.color_sphere, { backgroundColor: item.color }]}
                />
                <Text>{item.color}</Text>
              </View>
              <Text color={Theme.colors.darkGrey}>
                ${item.value} - {dayFormat.format(item.date)}{" "}
                {monthFormat.format(item.date)} {yearFormat.format(item.date)}
              </Text>
            </View>
            <Text onPress={() => {}}>See more</Text>
          </View>
        )
      })}
    </ScrollView>
  )
}

const COLOR_SPHERE_SIZE = 10
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  item_wrap: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginVertical: 15,
  },

  title_wrap: {
    marginBottom: 5,
  },

  color_sphere: {
    height: COLOR_SPHERE_SIZE,
    width: COLOR_SPHERE_SIZE,
    borderRadius: COLOR_SPHERE_SIZE / 2,
    marginRight: 10,
  },
})

export default React.memo(TransactionsList)
