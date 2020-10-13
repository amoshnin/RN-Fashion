// PLUGINS IMPORTS //
import React, { useState, useRef } from "react"
import { View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Icon } from "~/Content/Shared/Components/Components/Components"
import { useNavigation } from "@react-navigation/native"

// COMPONENTS IMPORTS //
import Header from "~/Content/Shared/Components/Sections/Header/Header"
import ProductsList, { defaultOutfits } from "./ProductsList/ProductsList"
import Footer from "./Footer/Footer"

// EXTRA IMPORTS //
import { Ionicons, Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const FavouriteOutfits: React.FC<PropsType> = (props) => {
  const navigation = useNavigation()
  const [outfits, setOutfits] = useState(defaultOutfits)
  const listRef = useRef(null)

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.safe_wrap}>
        <Header
          leftIcon={
            // @ts-ignore
            <Icon onPress={() => navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={22} color="black" />
            </Icon>
          }
          rightIcon={
            <Icon>
              <Feather name="shopping-bag" size={20} color="black" />
            </Icon>
          }
          title={"FAVOURITE OUTFITS"}
          darkText
        />
      </SafeAreaView>

      <ProductsList
        outfits={outfits}
        setOutfits={setOutfits}
        listRef={listRef}
      />
      <View style={styles.footer_wrap}>
        <Footer
          label={"Add to favourites"}
          onPress={() =>
            setOutfits((prev) => prev.filter((item) => !item.selected))
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  safe_wrap: { marginBottom: -15 },

  footer_wrap: { position: "absolute", bottom: 0, left: 0, right: 0 },
})

export default React.memo(FavouriteOutfits)
