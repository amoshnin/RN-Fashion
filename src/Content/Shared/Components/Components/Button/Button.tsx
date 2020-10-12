// PLUGINS IMPORTS //
import React, { ReactNode } from "react"
import { StyleSheet, ViewStyle } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  text?: string
  isCenterAlign?: boolean
  children?: ReactNode

  variant?: "Primary" | "Default" | "Transparent"
  textColor?: string
  backgroundColor?: string
  style?: ViewStyle

  onPress?: () => void
}

const Button: React.FC<PropsType> = (props) => {
  const backgroundColor =
    props.variant === "Primary"
      ? Theme.colors.primary
      : props.variant === "Transparent"
      ? undefined
      : Theme.colors.grey
  const color = props.variant === "Primary" ? "white" : Theme.colors.secondary

  return (
    <RectButton
      style={[
        styles.wrapper,
        {
          backgroundColor: props.backgroundColor || backgroundColor,
          alignSelf: props.isCenterAlign ? "center" : undefined,
        },
        props.style,
      ]}
      onPress={props.onPress}
    >
      {props.text ? (
        <Text
          size={15}
          fontFamily={"Semibold"}
          color={props.textColor || color}
          isCenterAlign
        >
          {props.text}
        </Text>
      ) : (
        props.children
      )}
    </RectButton>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
})

Button.defaultProps = { variant: "Default" }
export default React.memo(Button)
