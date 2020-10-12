// PLUGINS IMPORTS //
import React, { ReactNode } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS
import {
  SimpleLineIcons,
  AntDesign,
  FontAwesome,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

interface TabItemPropsType {
  navigation: any

  title: string
  onPress?: () => void
  navigationDest?: string
  icon: ReactNode
  color: string
}

export const TabsList = [
  {
    title: "Outfit Ideas",
    navigationDest: "OutfitIdeas",
    //
    icon: <SimpleLineIcons name="energy" size={24} color={"white"} />,
    color: "#2CB9B0",
  },
  {
    title: "Favourite Outfits",
    navigationDest: "FavouriteOutfits",
    //
    icon: <AntDesign name="heart" size={20} color={"white"} />,
    color: "#F03213",
  },
  {
    title: "Edit Profile",
    navigationDest: "EditProfile",
    //
    icon: <FontAwesome name="user" size={24} color={"white"} />,
    color: "#F8C308",
  },
  {
    title: "Transaction History",
    navigationDest: "TransactionHistory",
    //
    icon: <MaterialIcons name="history" size={24} color={"white"} />,
    color: "#F75D94",
  },
  {
    title: "Notifications Settings",
    navigationDest: "NotificationsSettings",
    //
    icon: <Feather name="settings" size={22} color={"white"} />,
    color: "#3E12B0",
  },
  {
    title: "Logout",
    onPress: () => {},
    //
    icon: <AntDesign name="logout" size={20} color={"white"} />,
    color: "#100A2C",
  },
]

const TabItem = (props: TabItemPropsType) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        props.navigationDest
          ? props.navigation.navigate(props.navigationDest)
          : props.onPress && props.onPress()
      }
    >
      <View style={[styles.icon_wrap, { backgroundColor: props.color }]}>
        {props.icon}
      </View>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  )
}

const ICON_SIZE = 40
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 12,
  },

  icon_wrap: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
})

export default TabItem
