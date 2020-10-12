// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const TransactionsList: React.FC<PropsType> = (props) => {
  return <View style={styles.wrapper}></View>
}

const styles = StyleSheet.create({
  wrapper: {},
})

export default React.memo(TransactionsList)
