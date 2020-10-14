// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Configuration from "./Variables/Configuration/Configuration"
import PersonalInfo from "./Variables/PersonalInfo/PersonalInfo"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const BodyCategories: React.FC<PropsType> = (props) => {
  const [isConfig, setIsConfig] = useState<boolean>(true)
  return (
    <View style={styles.wrapper}>
      <Header isConfig={isConfig} setIsConfig={setIsConfig} />
      {isConfig ? <Configuration /> : <PersonalInfo />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignContent: "center",
  },
})

export default React.memo(BodyCategories)
