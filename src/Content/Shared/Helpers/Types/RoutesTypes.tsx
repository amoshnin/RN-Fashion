export type AuthStackTypes = {
  SliderScreen: undefined
  WelcomeScreen: undefined
  LoginScreen: {
    setIsAuth?: (authStatus: boolean) => void
  }
  RegisterScreen: {
    setIsAuth?: (authStatus: boolean) => void
  }
  ChangePassScreen: undefined
  ChangePassSuccessScreen: undefined
}

export type HomeStackTypes = {
  MainScreen: undefined
}
