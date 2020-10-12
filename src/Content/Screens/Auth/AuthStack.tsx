// PLUGINS IMPORTS //
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import SliderScreen from "./Screens/InitScreens/SliderScreen/SliderScreen"
import WelcomeScreen from "./Screens/InitScreens/WelcomeScreen/WelcomeScreen"
//
import LoginScreen from "./Screens/AuthScreens/LoginScreen/LoginScreen"
import RegisterScreen from "./Screens/AuthScreens/RegisterScreen/RegisterScreen"
import ChangePassScreen from "./Screens/SettingsScreens/ChangePassScreen/ChangePassScreen"
import ChangePassSuccessScreen from "./Screens/SettingsScreens/ChangePassSuccessScreen/ChangePassSuccessScreen"

import { AuthStackTypes } from "~/Content/Shared/Helpers/Types/RoutesTypes"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  setIsAuth: (authStatus: boolean) => void
}
const AuthStack: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator<AuthStackTypes>()

  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name={"SliderScreen"} component={SliderScreen} />
      <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen} />
      {/*  */}
      <Stack.Screen
        name={"LoginScreen"}
        component={LoginScreen}
        initialParams={{ setIsAuth: props.setIsAuth }}
      />
      <Stack.Screen
        name={"RegisterScreen"}
        component={RegisterScreen}
        initialParams={{ setIsAuth: props.setIsAuth }}
      />
      <Stack.Screen name={"ChangePassScreen"} component={ChangePassScreen} />
      <Stack.Screen
        name={"ChangePassSuccessScreen"}
        component={ChangePassSuccessScreen}
      />
    </Stack.Navigator>
  )
}

export default React.memo(AuthStack)
