// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { Text, Button } from "~/Content/Shared/Components/Components/Components"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  isLast: boolean
  content: {
    title: string
    description: string
  }
  onPress: () => void
}

const SubSlideItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text
        size={24}
        lineHeight={30}
        fontFamily={"Semibold"}
        color={Theme.colors.secondary}
        style={styles.title}
        isCenterAlign
      >
        {props.content.title}
      </Text>
      <Text
        size={16}
        color={Theme.colors.secondary}
        lineHeight={24}
        isCenterAlign
      >
        {props.content.description}
      </Text>
      <Button
        text={props.isLast ? "Let's get started" : "Next"}
        variant={props.isLast ? "Primary" : "Default"}
        style={styles.button}
        onPress={props.onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 44,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginBottom: 12,
  },

  button: {
    marginTop: 40,
  },
})

export default React.memo(SubSlideItem)
