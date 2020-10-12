// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, ScrollView, StyleSheet, Dimensions } from "react-native"

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
  outfits: Array<OutfitType>

  selectedOutfits: Array<OutfitType>
  setSelectedOutfits: (newSelectedOutfits: Array<OutfitType>) => void
}

const { width: wWidth } = Dimensions.get("screen")
const ProductsList: React.FC<PropsType> = (props) => {
  const width = (wWidth - 20 * 2 - 10) / 2

  const Product = (item: OutfitType) => {
    const isSelected = props.selectedOutfits.includes(item)

    return (
      <ProductItem
        key={item.color}
        outfit={item}
        width={width}
        isSelected={isSelected}
        onPress={() =>
          isSelected
            ? props.setSelectedOutfits(
                props.selectedOutfits.filter((outfit) => outfit.ID !== item.ID)
              )
            : props.setSelectedOutfits([...props.selectedOutfits, item])
        }
      />
    )
  }

  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{ paddingBottom: 135 }}
    >
      <View style={styles.container}>
        <View style={styles.column}>
          {props.outfits
            .filter((_, i) => i % 2 === 0)
            .map((item) => Product(item))}
        </View>
        <View style={styles.column}>
          {props.outfits
            .filter((_, i) => i % 2 !== 0)
            .map((item) => Product(item))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
  },

  container: {
    flexDirection: "row",
  },

  column: {
    flex: 1,
    alignItems: "center",
  },
})

export default React.memo(ProductsList)
