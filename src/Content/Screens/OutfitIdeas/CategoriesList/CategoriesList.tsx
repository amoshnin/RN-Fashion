// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import CategoryItem, {
  CategoryItemPropsType,
} from "./CategoryItem/CategoryItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const categories: Array<CategoryItemPropsType> = [
  {
    title: "Summer",
    color: "#F1E0FF",
  },
  {
    title: "New In",
    color: "#FFE8E9",
  },
  {
    title: "Accesories",
    color: "#FFE8E9",
  },
  {
    title: "Outlet",
    color: "#F1E0FF",
  },
  {
    title: "Active Wear",
    color: "#BFEAF5",
  },
]
const CategoriesList: React.FC<PropsType> = (props) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => (
          <CategoryItem key={item.title} {...item} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})

export default React.memo(CategoriesList)
