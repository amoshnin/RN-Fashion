// PLUGINS IMPORTS //
import React, { Ref } from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import Animated from "react-native-reanimated"

// COMPONENTS IMPORTS //
import ProductItem, { OutfitType } from "./ProductItem/ProductItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export const defaultOutfits: Array<OutfitType> = [
  {
    color: "#FBD1D7",
    aspectRatio: 2.2,
    selected: false,
    ID: 1,
  },
  {
    color: "#EFE4D9",
    aspectRatio: 1.8,
    selected: false,
    ID: 2,
  },
  {
    color: "#BEECC4",
    aspectRatio: 1.7,
    selected: false,
    ID: 3,
  },
  {
    color: "#BFEAF5",
    aspectRatio: 2.3,
    selected: false,
    ID: 4,
  },
  {
    color: "#D5C3BB",
    aspectRatio: 1.7,
    selected: false,
    ID: 5,
  },
  {
    color: "#F3F0EF",
    aspectRatio: 2,
    selected: false,
    ID: 6,
  },
  {
    color: "#FBD1D7",
    aspectRatio: 2.1,
    selected: false,
    ID: 7,
  },
  {
    color: "#BEECC4",
    aspectRatio: 2.1,
    selected: false,
    ID: 8,
  },
  {
    color: "#EFE4D9",
    aspectRatio: 2.1,
    selected: false,
    ID: 9,
  },
]

interface PropsType {
  listRef: Ref<any>
  outfits: Array<OutfitType>
  setOutfits: (newOutfits: Array<OutfitType>) => void
}

const { width: wWidth } = Dimensions.get("screen")
const ProductsList: React.FC<PropsType> = (props) => {
  const width = (wWidth - 20 * 2 - 10) / 2

  const Product = (item: OutfitType) => {
    return (
      <ProductItem
        key={item.ID}
        outfit={item}
        width={width}
        isSelected={item.selected}
        onPress={() => {
          item.selected = !item.selected
        }}
      />
    )
  }

  return (
    <Animated.ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.scroll_container}
    >
      <View style={styles.container}>
        <View style={styles.column}>
          {props.outfits
            .filter((item) => item.ID % 2 === 0)
            .map((item) => Product(item))}
        </View>

        <View style={styles.column}>
          {props.outfits
            .filter((item) => item.ID % 2 !== 0)
            .map((item) => Product(item))}
        </View>
      </View>
    </Animated.ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
  },

  scroll_container: { paddingBottom: 135 },

  container: {
    flexDirection: "row",
  },

  column: {
    flex: 1,
    alignItems: "center",
  },
})

export default React.memo(ProductsList)
