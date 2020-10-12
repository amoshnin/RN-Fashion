// PLUGINS IMPORTS //
import React, { ReactNode } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  children: ReactNode
  onPress?: () => void
}

const Icon: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  )
}

const SIZE = 50
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FAFAFA",
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default React.memo(Icon)
