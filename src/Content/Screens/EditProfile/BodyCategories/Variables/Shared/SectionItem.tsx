// PLUGINS IMPORTS //
import React, { ReactNode } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { Text } from "~/Content/Shared/Components/Components/Components"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string
  children: ReactNode

  isScroll?: boolean
}

const SectionItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text color={"grey"} style={styles.title}>
        {props.title}
      </Text>
      {props.isScroll ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {props.children}
        </ScrollView>
      ) : (
        <View style={styles.content}>{props.children}</View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 25,
    marginTop: 30,
  },

  title: {
    marginBottom: 15,
  },

  content: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
})

export default React.memo(SectionItem)
