// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export interface CategoryItemPropsType {
  title: string
  color: string
}

const CategoryItem: React.FC<CategoryItemPropsType> = (props) => {
  const [selected, setSelected] = useState<boolean>(false)
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => setSelected((prev) => !prev)}
    >
      <View
        style={[
          styles.icon,
          {
            backgroundColor: props.color,
            borderWidth: selected ? 2 : 0,
            borderColor: "silver",
          },
        ]}
      />
      <Text>{props.title}</Text>
    </TouchableOpacity>
  )
}

const ICON_SIZE = 62
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 14,
  },

  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    marginBottom: 5,
    borderWidth: 1,
  },
})

export default React.memo(CategoryItem)
