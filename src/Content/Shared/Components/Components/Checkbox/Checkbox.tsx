// PLUGINS IMPORTS //
import React, { useState } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  value: boolean
  onChange: (newValue: boolean) => void
}

const Checkbox: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onChange(!props.value)}
      style={[
        styles.wrapper,
        { backgroundColor: props.value ? Theme.colors.primary : "transparent" },
      ]}
    >
      <AntDesign name="check" size={14} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Theme.colors.primary,
    padding: 2,
  },
})

export default React.memo(Checkbox)
