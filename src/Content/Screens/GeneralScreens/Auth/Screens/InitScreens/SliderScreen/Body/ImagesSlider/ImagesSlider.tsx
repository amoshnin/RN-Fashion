// PLUGINS IMPORTS //
import React from "react"
import { Image, StyleSheet, Dimensions } from "react-native"
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated"

// COMPONENTS IMPORTS //
import { Slides } from "../../Data/Data"

// EXTRA IMPORTS
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

const { width } = Dimensions.get("window")
type PropsType = {
  scrollOffset: Animated.SharedValue<number>
}

const ImagesSlider: React.FC<PropsType> = (props) => {
  return (
    <>
      {Slides.map(({ picture }, index) => {
        const opacity = useDerivedValue(() =>
          interpolate(
            props.scrollOffset.value,
            [(index - 0.5) * width, index * width, (index + 0.5) * width],
            [0, 1, 0],
            Extrapolate.CLAMP
          )
        )

        const animatedStyle = useAnimatedStyle(() => {
          return {
            opacity: opacity.value,
          }
        })

        return (
          <Animated.View
            style={[styles.wrapper, animatedStyle]}
            key={picture.src}
          >
            <Image
              source={picture.src}
              style={[
                styles.picture,
                {
                  height:
                    ((width - Theme.borderRadius.xl) * picture.height) /
                    picture.width,
                },
              ]}
            />
          </Animated.View>
        )
      })}
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    borderBottomRightRadius: Theme.borderRadius.xl,
  },

  picture: {
    width: width - Theme.borderRadius.xl,
  },
})

export default React.memo(ImagesSlider)
