// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import { Text, Button } from "~/Content/Shared/Components/Components/Components"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  content: {
    text: string
    buttonText: string
    onPress: () => void
  }
}

const FONT_SIZE = 16.5
const FooterSection: React.FC<PropsType> = (props) => {
  return (
    <Button style={styles.wrapper} onPress={props.content.onPress}>
      <Text color={"white"} fontFamily={"Semibold"} size={FONT_SIZE}>
        {props.content.text}{" "}
      </Text>
      <Text
        color={Theme.colors.primary}
        fontFamily={"Semibold"}
        size={FONT_SIZE}
      >
        {props.content.buttonText}
      </Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    alignSelf: "center",
    flexDirection: "row",
  },
})

export default React.memo(FooterSection)
