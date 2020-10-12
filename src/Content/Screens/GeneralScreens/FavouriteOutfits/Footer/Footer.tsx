// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"
import { Button } from "~/Content/Shared/Components/Components/Components"
import { useSafeAreaInsets } from "react-native-safe-area-context"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  label: string
  onPress: () => void
}

const Footer: React.FC<PropsType> = (props) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { paddingBottom: insets.top }]}>
        <Button
          variant={"Primary"}
          text={props.label}
          onPress={props.onPress}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Theme.colors.secondary,
    paddingTop: 25,
    borderTopLeftRadius: Theme.borderRadius.xl,
  },

  container: {
    alignItems: "center",
  },
})

export default React.memo(Footer)
