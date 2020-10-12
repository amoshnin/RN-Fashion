// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import LayoutScreenWrapper from "~/Content/Shared/Components/Sections/LayoutScreenWrapper/LayoutScreenWrapper"
import Header from "./Header/Header"
import Form from "./Form/Form"

import SocialMediaFooter from "../../../Shared/SocialMediaFooter/SocialMediaFooter"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const ChangePassScreen: React.FC<PropsType> = (props) => {
  return (
    <LayoutScreenWrapper
      pattern={2}
      footer={
        <SocialMediaFooter
          content={{
            text: "Don't work?",
            buttonText: "Try another way",
            onPress: () => {},
          }}
        />
      }
    >
      <View style={styles.wrapper}>
        <Header />
        <Form />
      </View>
    </LayoutScreenWrapper>
  )
}

const styles = StyleSheet.create({
  wrapper: { marginVertical: 35, justifyContent: "center", flex: 1 },
})

export default React.memo(ChangePassScreen)
