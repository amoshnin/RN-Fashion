// PLUGINS IMPORTS //
import React from "react"
import { Text, TouchableOpacity, TextStyle } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  color?: string
  size?: number
  lineHeight?: number
  isBold?: boolean
  isCenterAlign?: boolean
  fontFamily?: "Regular" | "Semibold" | "Bold"

  style?: TextStyle
  onPress?: () => void
}

const TextBody: React.FC<PropsType> = (props) => {
  const getProps = () => {
    return {
      fontFamily: props.fontFamily,
    }
  }

  return (
    <Text
      style={[
        props.style,
        { ...getProps() },
        {
          lineHeight: props.lineHeight,
          color: props.color || Theme.colors.secondary,
          fontSize: props.size || 15,
          fontWeight: props.isBold ? "bold" : "500",
          textAlign: props.isCenterAlign && "center",
        } as any,
      ]}
    >
      {props.children}
    </Text>
  )
}

const TextComponent: React.FC<PropsType> = (props) => {
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <TextBody {...props}>{props.children}</TextBody>
      </TouchableOpacity>
    )
  } else {
    return <TextBody {...props}>{props.children}</TextBody>
  }
}

export default TextComponent
