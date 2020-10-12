// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet, Dimensions, ImageRequireSource } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  interpolate,
  Extrapolate,
} from "react-native-reanimated"
import { mixColor, mix } from "react-native-redash"

// COMPONENTS IMPORTS //
import { step } from "../CardsList"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  image: ImageRequireSource

  position: Animated.SharedValue<number>
  onSwipe: () => void
}

const { width: screenWidth } = Dimensions.get("screen")
const width = screenWidth * 0.75
const height = width * (425 / 294)
const Card: React.FC<PropsType> = (props) => {
  const x = useSharedValue(0)
  const y = useSharedValue(0)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = x.value
      ctx.startY = y.value
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX
      y.value = ctx.startY + event.translationY
    },
    onEnd: (event) => {
      if (
        Math.abs(event.translationX) > width / 2.1 &&
        Math.abs(event.translationY) < 50
      ) {
        props.onSwipe()
      } else {
        x.value = withSpring(0)
        y.value = withSpring(0)
      }
    },
  })
  const backgroundColor = useDerivedValue(() =>
    mixColor(props.position.value, "#C9E9E7", "#74BCB8")
  )

  const translateYOffset = useDerivedValue(() =>
    mix(props.position.value, 0, -50)
  )
  const translateY = useDerivedValue(() => translateYOffset.value + y.value)
  const scale = useDerivedValue(() => mix(props.position.value, 1, 0.9))

  const animatedStyle = useAnimatedStyle(
    () =>
      ({
        backgroundColor: backgroundColor.value,
        transform: [
          { translateY: translateY.value },
          { translateX: x.value },
          { scale: scale.value },
        ],
      } as any)
  )

  const imageScale = useDerivedValue(() =>
    interpolate(props.position.value, [0, step], [1, 0.8], Extrapolate.CLAMP)
  )
  const imageAnimatedStyle = useAnimatedStyle(
    () =>
      ({
        backgroundColor: backgroundColor.value,
        transform: [{ scale: imageScale.value }],
      } as any)
  )

  return (
    <View style={styles.wrapper}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.block, animatedStyle]}>
          <Animated.Image
            source={props.image}
            style={[styles.image, imageAnimatedStyle]}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    ...(StyleSheet.absoluteFill as any),
    justifyContent: "center",
    alignItems: "center",
  },

  block: {
    borderRadius: 24,
    width,
    height,
    overflow: "hidden",
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
})

export default React.memo(Card)
