// PLUGINS IMPORTS //
import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer"

// COMPONENTS IMPORTS //
import Wrapper from "./Wrapper/Wrapper"
import Header from "~/Content/Shared/Components/Sections/Header/Header"
import AccountInfo from "./AccountInfo/AccountInfo"
import TabItem, { TabsList } from "./TabItem/TabItem"

// EXTRA IMPORTS
import { AntDesign, Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

const DrawerNavigation = (
  props: DrawerContentComponentProps<DrawerContentOptions>
) => {
  return (
    <Wrapper
      header={
        <Header
          leftIcon={
            // @ts-ignore
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
              <AntDesign name="close" size={20} color="white" />
            </TouchableOpacity>
          }
          rightIcon={
            <TouchableOpacity style={styles.icon}>
              <Feather name="shopping-bag" size={20} color="white" />
            </TouchableOpacity>
          }
          title={"MY PROFILE"}
        />
      }
    >
      <AccountInfo />
      {TabsList.map((item) => (
        <TabItem {...item} navigation={props.navigation} />
      ))}
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 3,
  },
})

export default DrawerNavigation
