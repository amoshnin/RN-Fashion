// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Icon } from "~/Content/Shared/Components/Components/Components"
import { useNavigation } from "@react-navigation/native"

// COMPONENTS IMPORTS //
import Header from "~/Content/Shared/Components/Sections/Header/Header"
import Footer from "./Footer/Footer"

import TopSection from "./TopSection/TopSection"
import Graph from "./Graph/Graph"
import TransactionsList from "./TransactionList/TransactionList"

// EXTRA IMPORTS //
import { Ionicons, Feather } from "@expo/vector-icons"
import { ScrollView } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const TransactionsHistory: React.FC<PropsType> = (props) => {
  const navigation = useNavigation()
  return (
    <View style={styles.wrapper}>
      <SafeAreaView>
        <Header
          leftIcon={
            // @ts-ignore
            <Icon onPress={() => navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={22} color="black" />
            </Icon>
          }
          rightIcon={
            <Icon>
              <Feather name="share" size={24} color="black" />
            </Icon>
          }
          title={"Transactions history"}
          darkText
        />
      </SafeAreaView>
      <ScrollView>
        <TopSection />
        <Graph />
        <TransactionsList />
      </ScrollView>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})

export default React.memo(TransactionsHistory)
