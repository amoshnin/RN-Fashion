// PLUGINS IMPORTS //
import React, { ReactText, Ref } from "react"
import { View, StyleSheet } from "react-native"
import Animated, { useAnimatedStyle } from "react-native-reanimated"

// COMPONENTS IMPORTS //
import PaginationSection from "./PaginationSection/PaginationSection"
import FooterSlider from "./FooterSlider/FooterSlider"

import { Slides } from "../Data/Data"

// EXTRA IMPORTS
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  scrollRef: Ref<Animated.ScrollView>
  scrollOffset: Animated.SharedValue<number>
  backgroundColor: Animated.SharedValue<ReactText>
}

const Footer: React.FC<PropsType> = (props) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: props.backgroundColor.value,
    } as any
  })

  return (
    <View style={styles.footer}>
      <Animated.View style={[styles.footer_overlay, animatedStyle]} />

      <View style={styles.footer_content}>
        <PaginationSection
          scrollOffset={props.scrollOffset}
          indexesArray={Slides.map((_, index) => index)}
        />
        <FooterSlider
          scrollRef={props.scrollRef}
          scrollOffset={props.scrollOffset}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
  },

  footer_overlay: {
    ...StyleSheet.absoluteFillObject,
  },

  footer_content: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: Theme.borderRadius.xl,
  },
})

export default React.memo(Footer)
