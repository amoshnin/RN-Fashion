// PLUGINS IMPORTS //
import React, { ReactText, Ref } from "react"
import { StyleSheet } from "react-native"
import Animated, { useAnimatedStyle } from "react-native-reanimated"

// COMPONENTS IMPORTS //
import ImagesSlider from "./ImagesSlider/ImagesSlider"
import ContentSlider from "./ContentSlider/ContentSlider"

import { SLIDE_HEIGHT } from "./ContentSlider/SlideItem/SlideItem"

// EXTRA IMPORTS
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  onScroll: any
  scrollRef: Ref<Animated.ScrollView>
  scrollOffset: Animated.SharedValue<number>
  backgroundColor: Animated.SharedValue<ReactText>
}

const Body: React.FC<PropsType> = (props) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: props.backgroundColor.value,
    } as any
  })

  return (
    <Animated.View style={[styles.wrapper, animatedStyle]}>
      <ImagesSlider scrollOffset={props.scrollOffset} />
      <ContentSlider onScroll={props.onScroll} scrollRef={props.scrollRef} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: Theme.borderRadius.xl,
  },
})

export default React.memo(Body)
