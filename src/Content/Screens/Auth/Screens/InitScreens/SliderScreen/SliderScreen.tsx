// PLUGINS IMPORTS //
import React, { useRef } from "react"
import { View, Dimensions, StyleSheet } from "react-native"
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useDerivedValue,
} from "react-native-reanimated"
import { interpolateColor } from "react-native-redash"

// COMPONENTS IMPORTS //
import Body from "./Body/Body"
import Footer from "./Footer/Footer"

import { Slides } from "./Data/Data"

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

const { width } = Dimensions.get("window")
const SliderScreem = () => {
  const scrollOffset = useSharedValue(0)
  const scrollRef = useRef<Animated.ScrollView>(null)

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollOffset.value = event.contentOffset.x
  })

  const backgroundColor = useDerivedValue(() => {
    return interpolateColor(
      scrollOffset.value,
      Slides.map((slide, i) => i * width),
      Slides.map((slide) => slide.color)
    )
  })

  return (
    <View style={styles.wrapper}>
      <Body
        scrollRef={scrollRef}
        onScroll={onScroll}
        scrollOffset={scrollOffset}
        backgroundColor={backgroundColor}
      />
      <Footer
        scrollRef={scrollRef}
        scrollOffset={scrollOffset}
        backgroundColor={backgroundColor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})

export default React.memo(SliderScreem)
