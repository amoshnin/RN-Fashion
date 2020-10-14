// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Text, Button } from "~/Content/Shared/Components/Components/Components"

// COMPONENTS IMPORTS //
import SectionItem from "../Shared/SectionItem"

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Configuration: React.FC<PropsType> = (props) => {
  const [selectedGenders, setSelectedGenders] = useState<Array<string>>([])
  const [selectedSizes, setSelectedSizes] = useState<Array<string>>([])
  const [selectedBrands, setSelectedBrands] = useState<Array<string>>([])
  const [selectedColors, setSelectedColors] = useState<Array<string>>([])

  const genders = ["For men", "For women", "Both"]
  const sizes = ["XS", "S", "M", "L", "XXL"]
  const brands = [
    "Addidas",
    "Nike",
    "Converse",
    "Jordan",
    "Tommy Hillfiger",
    "Emporio Armani",
    "Lous Vouiton",
    "Gucci",
  ]
  const colors = [
    "#100B2F",
    "#E30246",
    "#13ED82",
    "#E63318",
    "#E55D8D",
    "red",
    "purple",
  ]

  const select = (fn: any, item: string, isSelected: boolean) => {
    if (isSelected) {
      fn((prev: Array<string>) => prev.filter((string) => string !== item))
    } else {
      fn((prev: Array<string>) => [...prev, item])
    }
  }

  return (
    <View>
      <SectionItem title={"What type of outfit you usually wear?"} isScroll>
        {genders.map((text) => {
          const selected = selectedGenders.includes(text)
          return (
            <Button
              onPress={() => select(setSelectedGenders, text, selected)}
              text={text}
              style={styles.button}
              variant={selected ? "Primary" : "Default"}
            />
          )
        })}
      </SectionItem>

      <SectionItem title={"What is your clothing size?"} isScroll>
        {sizes.map((text) => {
          const selected = selectedSizes.includes(text)
          return (
            <Button
              onPress={() => select(setSelectedSizes, text, selected)}
              text={text}
              style={[styles.button, styles.size_btn]}
              variant={selected ? "Primary" : "Default"}
            />
          )
        })}
      </SectionItem>

      <SectionItem title={"Which are you preffered clothing colour?"} isScroll>
        {colors.map((color) => {
          const selected = selectedColors.includes(color)
          return (
            <Button
              onPress={() => select(setSelectedColors, color, selected)}
              style={[styles.color_btn, { backgroundColor: color }]}
            >
              {selected && <Feather name="check" size={24} color="white" />}
            </Button>
          )
        })}
      </SectionItem>

      <SectionItem title={"Which are you preffered brands?"}>
        {brands.map((text) => {
          const selected = selectedBrands.includes(text)
          return (
            <Button
              onPress={() => select(setSelectedBrands, text, selected)}
              text={text}
              style={styles.button}
              variant={selected ? "Primary" : "Default"}
            />
          )
        })}
      </SectionItem>
    </View>
  )
}

const SIZE_BUTTON_SIZE = 55
const styles = StyleSheet.create({
  button: {
    width: undefined,
    paddingHorizontal: 16,
    marginRight: 10,
    marginBottom: 14,
  },

  size_btn: {
    height: SIZE_BUTTON_SIZE,
    width: SIZE_BUTTON_SIZE,
    borderRadius: SIZE_BUTTON_SIZE / 2,
  },

  color_btn: {
    height: SIZE_BUTTON_SIZE - 10,
    width: SIZE_BUTTON_SIZE - 10,
    borderRadius: (SIZE_BUTTON_SIZE - 10) / 2,
    marginRight: 20,
  },
})

export default React.memo(Configuration)
