// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import {
  Text,
  Button,
  TextInput,
} from "~/Content/Shared/Components/Components/Components"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}
const PersonalInfo: React.FC<PropsType> = (props) => {
  const [isMale, setIsMale] = useState<boolean>(true)
  return (
    <View style={styles.wrapper}>
      <Text color={"grey"}>Account information</Text>
      <View style={styles.inputs_wrap}>
        <TextInput placeholder={"Username"} value={""} />
        <TextInput placeholder={"Password"} value={""} />
      </View>
      <View style={styles.buttons_wrap}>
        <Button
          style={styles.button}
          text={"Male"}
          variant={isMale ? "Primary" : "Default"}
          onPress={() => setIsMale(true)}
        />
        <Button
          style={styles.button}
          text={"Female"}
          variant={isMale ? "Default" : "Primary"}
          onPress={() => setIsMale(false)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 25,
    marginTop: 30,
  },

  inputs_wrap: {
    marginHorizontal: 5,
    marginTop: 15,
  },

  buttons_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  button: {
    width: "45%",
  },
})

export default React.memo(PersonalInfo)
