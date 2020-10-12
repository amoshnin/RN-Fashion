// PLUGINS IMPORTS //
import React from "react"
import { Dimensions, StyleSheet } from "react-native"
import Animated, { useAnimatedStyle } from "react-native-reanimated"
import { useNavigation } from "@react-navigation/native"

// COMPONENTS IMPORTS //
import SubSlideItem from "./SubSlideItem/SubSlideItem"
import { Slides } from "../../Data/Data"

// EXTRA IMPORTS
import { NavigationPropsTypes } from "~/Content/Shared/Helpers/Types/HelperTypes"
import { AuthStackTypes } from "~/Content/Shared/Helpers/Types/RoutesTypes"

/////////////////////////////////////////////////////////////////////////////

const { width } = Dimensions.get("window")
type PropsType = {
  scrollRef: any
  scrollOffset: Animated.SharedValue<number>
}

const FooterSection: React.FC<PropsType> = (props) => {
  const navigation: NavigationPropsTypes<
    AuthStackTypes,
    "SliderScreen"
  > = useNavigation()

  const subSlideStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: props.scrollOffset.value * -1 }],
  }))

  return (
    <Animated.View
      style={[styles.wrapper, subSlideStyle, { width: width * Slides.length }]}
    >
      {Slides.map((slide, index) => {
        const isLast = index === Slides.length - 1
        return (
          <SubSlideItem
            key={slide.label}
            isLast={isLast}
            content={slide.content}
            onPress={() => {
              if (isLast) {
                navigation.navigate("WelcomeScreen")
              } else {
                props.scrollRef.current
                  ?.getNode()
                  .scrollTo({ x: width * (index + 1), animated: true })
              }
            }}
          />
        )
      })}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, flexDirection: "row" },
})

export default React.memo(FooterSection)
