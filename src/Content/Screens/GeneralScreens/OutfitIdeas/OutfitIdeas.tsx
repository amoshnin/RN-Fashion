// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Icon } from "~/Content/Shared/Components/Components/Components"
import { useNavigation } from "@react-navigation/native"

// COMPONENTS IMPORTS //
import Background from "./Background/Background"
import Header from "~/Content/Shared/Components/Sections/Header/Header"

import CategoriesList from "./CategoriesList/CategoriesList"
import CardsList from "./CardsList/CardsList"

// EXTRA IMPORTS //
import { Ionicons, Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const OutfitIdeasStack: React.FC<PropsType> = (props) => {
  const navigation = useNavigation()

  return (
    <>
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
          title={"OUTFIT IDEAS"}
        />
      </SafeAreaView>
      <CategoriesList />
      <View style={styles.wrapper}>
        <Background />
        <CardsList />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  safe_wrap: { marginBottom: -15 },
})

export default React.memo(OutfitIdeasStack)
