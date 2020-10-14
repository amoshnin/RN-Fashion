// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, View, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //
import Header from "~/Content/Shared/Components/Sections/Header/Header"
import BodyCategories from "./BodyCategories/BodyCategories"
import { AccountInfo } from "~/Content/Shared/Sections/index"

// EXTRA IMPORTS //
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const EditProfileScreen: React.FC<PropsType> = (props) => {
  const navigation = useNavigation()

  return (
    <>
      <View style={styles.block} />
      <ScrollView>
        <SafeAreaView>
          <Header
            leftIcon={
              // @ts-ignore
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name="ios-menu" size={22} color="white" />
              </TouchableOpacity>
            }
            title={"EDIT PROFILE"}
          />
        </SafeAreaView>
        <View style={styles.wrapper}>
          <AccountInfo />
          <BodyCategories />
        </View>
      </ScrollView>
    </>
  )
}

const HEIGHT = 165
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: HEIGHT - 35,
  },

  block: {
    backgroundColor: Theme.colors.secondary,
    height: HEIGHT,
    width: "100%",
    position: "absolute",
    borderBottomRightRadius: Theme.borderRadius.xl,
  },
})

export default React.memo(EditProfileScreen)
