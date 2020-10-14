// PLUGINS IMPORTS //
import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"

// COMPONENTS IMPORTS //
import LoadAssets from "~/Content/Shared/Helpers/Functions/LoadAssets"

import AuthStack from "~/Content/Screens/Auth/AuthStack"
import OutfitIdeas from "~/Content/Screens/OutfitIdeas/OutfitIdeas"
import FavouriteOutfits from "~/Content/Screens/FavouriteOutfits/FavouriteOutfits"
import EditProfile from "~/Content/Screens/EditProfile/EditProfile"
import TransactionsHistory from "~/Content/Screens/TransactionsHistory/TransactionsHistory"

import DrawerNavigation from "~/Content/DrawerNavigation/DrawerNavigation"
import { DRAWER_WIDTH } from "~/Content/DrawerNavigation/Wrapper/Wrapper"

import { SafeAreaProvider } from "react-native-safe-area-context"
import { createDrawerNavigator } from "@react-navigation/drawer"

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

console.disableYellowBox = true

const fonts = {
  Bold: require("~/Assets/Fonts/SF-Pro-Text-Bold.otf"),
  Semibold: require("~/Assets/Fonts/SF-Pro-Text-Semibold.otf"),
  Regular: require("~/Assets/Fonts/SF-Pro-Text-Regular.otf"),
}

const assets = [
  require("~/Assets/Images/slides/1.png"),
  require("~/Assets/Images/slides/2.png"),
  require("~/Assets/Images/slides/3.png"),
  require("~/Assets/Images/slides/4.png"),
  require("~/Assets/Images/slides/5.png"),
  require("~/Assets/Images/background.png"),
  require("~/Assets/Images/drawer.png"),
  require("~/Assets/Images/patterns/pattern1.png"),
  require("~/Assets/Images/patterns/pattern2.png"),
  require("~/Assets/Images/patterns/pattern3.png"),
]

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const Drawer = createDrawerNavigator()

  return (
    <>
      {isAuth ? (
        <Drawer.Navigator
          initialRouteName="OutfitIdeas"
          drawerContent={DrawerNavigation}
          drawerStyle={{ width: DRAWER_WIDTH }}
        >
          <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
          <Drawer.Screen name="FavouriteOutfits" component={FavouriteOutfits} />
          <Drawer.Screen name="EditProfile" component={EditProfile} />
          <Drawer.Screen
            name="TransactionsHistory"
            component={TransactionsHistory}
          />
        </Drawer.Navigator>
      ) : (
        <AuthStack setIsAuth={setIsAuth} />
      )}
    </>
  )
}

const AppWrapper = () => (
  <LoadAssets {...{ fonts, assets }}>
    <StatusBar style={"dark"} />
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  </LoadAssets>
)

export default React.memo(AppWrapper)
