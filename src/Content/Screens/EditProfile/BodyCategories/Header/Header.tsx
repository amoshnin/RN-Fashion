// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  isConfig: boolean
  setIsConfig: (isConfig: boolean) => void
}

const Header: React.FC<PropsType> = (props) => {
  const data = [
    {
      title: "Configuration",
      selected: props.isConfig,
      onPress: () => props.setIsConfig(true),
    },
    {
      title: "Personal info",
      selected: !props.isConfig,
      onPress: () => props.setIsConfig(false),
    },
  ]
  return (
    <View style={styles.wrapper}>
      {data.map((item) => (
        <TouchableOpacity style={styles.item_wrap} onPress={item.onPress}>
          <Text color={item.selected ? "black" : "grey"} size={17} isBold>
            {item.title}
          </Text>
          {item.selected && <View style={styles.sphere} />}
        </TouchableOpacity>
      ))}
    </View>
  )
}

const SPHERE_SIZE = 7.5
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  item_wrap: {
    alignItems: "center",
  },

  sphere: {
    height: SPHERE_SIZE,
    width: SPHERE_SIZE,
    borderRadius: SPHERE_SIZE / 2,
    backgroundColor: Theme.colors.primary,
    marginTop: 8,
  },
})

export default React.memo(Header)
