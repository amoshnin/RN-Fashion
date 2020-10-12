// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Text, Button } from "~/Content/Shared/Components/Components/Components"
import { useNavigation } from "@react-navigation/native"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //
import LayoutScreenWrapper from "~/Content/Shared/Components/Sections/LayoutScreenWrapper/LayoutScreenWrapper"

// EXTRA IMPORTS //
import { NavigationPropsTypes } from "~/Content/Shared/Helpers/Types/HelperTypes"
import { AuthStackTypes } from "~/Content/Shared/Helpers/Types/RoutesTypes"
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const CHECK_BUTTON_SIZE = 80
const CLOSE_BUTTON_SIZE = 60
const ChangePassSuccessScreen: React.FC<PropsType> = (props) => {
  const navigation: NavigationPropsTypes<
    AuthStackTypes,
    "ChangePassSuccessScreen"
  > = useNavigation()

  return (
    <LayoutScreenWrapper
      pattern={0}
      footer={
        <>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={[
              styles.bubble_wrap,
              {
                backgroundColor: "white",
                height: CLOSE_BUTTON_SIZE,
                width: CLOSE_BUTTON_SIZE,
              },
            ]}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </>
      }
    >
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[
            styles.bubble_wrap,
            {
              backgroundColor: Theme.colors.primaryLight,
              height: CHECK_BUTTON_SIZE,
              width: CHECK_BUTTON_SIZE,
            },
          ]}
        >
          <AntDesign name="check" size={32} color={Theme.colors.primary} />
        </TouchableOpacity>
        <View style={styles.content_wrap}>
          <Text
            style={styles.title}
            size={28}
            fontFamily={"Semibold"}
            isCenterAlign
          >
            Your password was succesfully changed
          </Text>
          <Text color={Theme.colors.text} lineHeight={24} isCenterAlign>
            Close this window and login again
          </Text>
        </View>
        <Button
          text={"Login again"}
          variant={"Primary"}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
    </LayoutScreenWrapper>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -40,
  },

  bubble_wrap: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 20,
  },

  content_wrap: {
    marginTop: 23,
    marginBottom: 50,
  },

  title: {
    marginBottom: 10,
  },
})

export default React.memo(ChangePassSuccessScreen)
