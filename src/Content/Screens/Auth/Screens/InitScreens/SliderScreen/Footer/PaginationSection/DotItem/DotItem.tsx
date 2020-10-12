// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet, Dimensions } from "react-native"
import Animated, {
  Extrapolate,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
} from "react-native-reanimated"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  index: number
  scrollOffset: any
}

const { width } = Dimensions.get("window")
const DotItem: React.FC<PropsType> = (props) => {
  const opacity = useDerivedValue(() =>
    interpolate(
      props.scrollOffset.value / width,
      [props.index - 1, props.index, props.index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    )
  )

  const scale = useDerivedValue(() =>
    interpolate(
      props.scrollOffset.value / width,
      [props.index - 1, props.index, props.index + 1],
      [0.5, 1.25, 1],
      Extrapolate.CLAMP
    )
  )

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    }
  })

  return <Animated.View style={[styles.wrapper, animatedStyles]} />
}

const DOT_SIZE = 8
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Theme.colors.primary,
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    margin: 5,
  },
})

export default React.memo(DotItem)
