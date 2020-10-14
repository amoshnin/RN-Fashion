// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const AccountInfo = (props: PropsType) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.avatar} />
      <Text size={31} style={styles.title} isBold isCenterAlign>
        Mike Peter
      </Text>
      <Text color={Theme.colors.text} size={16} isCenterAlign>
        mike@gmail.com
      </Text>
    </View>
  )
}

const AVATAR_SIZE = 100
const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: -120,
    marginBottom: 40,
  },

  avatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: "#ABF8BA",
    marginBottom: 10,
  },

  title: {
    marginBottom: 3,
  },
})

export default AccountInfo
