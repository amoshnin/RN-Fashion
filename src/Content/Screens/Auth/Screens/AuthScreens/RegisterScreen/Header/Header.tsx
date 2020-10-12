// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"

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
        Create an account
      </Text>
      <Text color={"rgba(12,13,52,0.7)"} lineHeight={24} isCenterAlign>
        Let us know what's your name, email and password
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 70,
    marginBottom: "4%",
  },

  title: {
    marginBottom: 12,
  },
})

export default React.memo(Header)
