// PLUGINS IMPORTS //
import React, { useState } from "react"
import { TouchableOpacity, StyleSheet, View } from "react-native"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

export interface OutfitType {
  color: string
  aspectRatio: number
  selected: boolean
  ID: number
}
type PropsType = {
  outfit: OutfitType

  width: number
  isSelected: boolean
  onPress: () => void
}

const ProductsItem: React.FC<PropsType> = (props) => {
  const [selected, setSelected] = useState<boolean>(false)
  const { color, aspectRatio } = props.outfit
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress()
        setSelected((prev) => !prev)
      }}
      style={[
        styles.wrapper,
        {
          backgroundColor: color,
          height: (140 * aspectRatio) / 1.3,
        },
      ]}
    >
      {selected && (
        <View style={styles.badge}>
          <Feather name="check" size={20} color="white" />
        </View>
      )}
    </TouchableOpacity>
  )
}

const SIZE = 27
const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
    borderRadius: 12,
    width: "90%",
  },

  badge: {
    backgroundColor: Theme.colors.primary,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    alignSelf: "flex-end",
  },
})

export default React.memo(ProductsItem)
