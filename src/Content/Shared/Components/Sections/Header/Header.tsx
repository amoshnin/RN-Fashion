// PLUGINS IMPORTS //
import React, { ReactNode } from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  leftIcon: ReactNode
  rightIcon: ReactNode
  title: string
  darkText?: boolean
}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      {props.leftIcon}
      <Text size={14} color={props.darkText ? "black" : "white"}>
        {props.title.toUpperCase()}
      </Text>
      {props.rightIcon}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
})

export default Header
