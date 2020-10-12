import { ParamListBase, RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type NavigationPropsTypes<
  ParamsList extends ParamListBase,
  RouteName extends keyof ParamsList = string
> = StackNavigationProp<ParamsList, RouteName>

export type ParamsPropsTypes<
  ParamsList extends ParamListBase,
  RouteName extends keyof ParamsList = string
> = RouteProp<ParamsList, RouteName>
