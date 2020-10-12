// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text
        style={styles.title}
        size={28}
        fontFamily={"Semibold"}
        isCenterAlign
      >
        Forgot password?
      </Text>
      <Text color={Theme.colors.text} lineHeight={24} isCenterAlign>
        Enter the email address associated with your account
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 70,
    marginBottom: "5%",
  },

  title: {
    marginBottom: 12,
  },
})

export default React.memo(Header)
