// PLUGINS IMPORTS //
import React from "react"
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  ViewStyle,
  TextInputProps,
} from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"
import { AntDesign, Entypo } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

interface PropsType extends TextInputProps {
  style?: ViewStyle
  placeholder?: string
  placeholderColor?: string
  icon?: string

  value: string | undefined
  onChangeText?: (text: string) => void
  onBlur?: (e: any) => void

  isPassword?: boolean
  error?: string
  touched?: boolean
}

const TextInput: React.FC<PropsType> = (props) => {
  const color = props.touched
    ? props.error
      ? Theme.colors.danger
      : Theme.colors.primary
    : Theme.colors.darkGrey
  return (
    <View style={[styles.wrapper, { borderColor: color }]}>
      <View style={styles.container}>
        {props.icon && <Entypo name={props.icon} size={23} color={color} />}

        <RNTextInput
          style={[styles.input, props.style]}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderColor || Theme.colors.darkGrey}
          value={props.value as string}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          secureTextEntry={props.isPassword}
          autoCompleteType={props.autoCompleteType}
          keyboardType={props.keyboardType}
        />
      </View>

      {props.touched && (
        <View
          style={[
            styles.validation_circle,
            {
              backgroundColor: color,
            },
          ]}
        >
          {props.error ? (
            <AntDesign name="close" size={16} color={"white"} />
          ) : (
            <AntDesign name="check" size={16} color={"white"} />
          )}
        </View>
      )}
    </View>
  )
}

const VALIDATION_CIRCLE_SIZE = 22
const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 4,
    borderWidth: 1,
    height: 48,
    marginVertical: 7.5,
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  container: {
    flexDirection: "row",
    flex: 1,
  },

  input: {
    fontSize: 16,
    color: Theme.colors.secondary,
    marginLeft: 10,
    marginRight: 50,
    flex: 1,
  },

  validation_circle: {
    height: VALIDATION_CIRCLE_SIZE,
    width: VALIDATION_CIRCLE_SIZE,
    borderRadius: VALIDATION_CIRCLE_SIZE / 2,
    right: 15,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default React.memo(TextInput)
