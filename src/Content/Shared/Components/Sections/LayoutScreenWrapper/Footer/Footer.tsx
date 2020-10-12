// PLUGINS IMPORTS //
import React, { ReactNode } from "react"
import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  footer: ReactNode
}

const Footer: React.FC<PropsType> = (props) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom }]}>
      {props.footer}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Theme.colors.secondary,
    alignItems: "center",
  },
})

export default React.memo(Footer)
