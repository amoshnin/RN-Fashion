// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { Text, Button } from "~/Content/Shared/Components/Components/Components"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const TopSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text
          color={"#B8B7B9"}
          fontFamily={"Semibold"}
          style={{ marginBottom: 3 }}
        >
          TOTAL SPENT
        </Text>
        <Text size={24} fontFamily={"Bold"}>
          $619,19
        </Text>
      </View>
      <Button
        text={"All time"}
        textColor={Theme.colors.primary}
        backgroundColor={Theme.colors.primaryLight}
        style={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 23,
  },

  button: {
    width: 110,
  },
})

export default React.memo(TopSection)
