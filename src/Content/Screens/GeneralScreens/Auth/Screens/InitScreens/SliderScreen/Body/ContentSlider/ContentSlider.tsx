// PLUGINS IMPORTS //
import React, { ReactText, Ref } from "react"
import { Dimensions } from "react-native"
import Animated from "react-native-reanimated"

// COMPONENTS IMPORTS //
import SlideItem from "./SlideItem/SlideItem"
import { Slides } from "../../Data/Data"

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

const { width } = Dimensions.get("window")
type PropsType = {
  onScroll: any
  scrollRef: Ref<Animated.ScrollView>
}

const ContentSlider: React.FC<PropsType> = (props) => {
  return (
    <Animated.ScrollView
      ref={props.scrollRef}
      snapToInterval={width}
      decelerationRate={"fast"}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={1}
      onScroll={props.onScroll}
      horizontal
    >
      {Slides.map((slide, index) => (
        <SlideItem key={slide.label} slide={slide} rightAlign={!!(index % 2)} />
      ))}
    </Animated.ScrollView>
  )
}

export default React.memo(ContentSlider)
