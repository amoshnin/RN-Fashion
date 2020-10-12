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
import Graph, { PointType } from "./Graph/Graph"
import TransactionsList from "./TransactionList/TransactionList"

// EXTRA IMPORTS //
import { Ionicons, Feather } from "@expo/vector-icons"
import { ScrollView } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}
const data: Array<PointType> = [
  {
    date: new Date("2019-09-01").getTime(),
    value: 29,
  },
  {
    date: new Date("2019-10-05").getTime(),
    value: 10,
  },

  {
    date: new Date("2019-11-11").getTime(),
    value: 139.42,
  },
  {
    date: new Date("2019-12-22").getTime(),
    value: 26.42,
  },
  {
    date: new Date("2020-01-01").getTime(),
    value: 54.42,
  },
  {
    date: new Date("2020-02-05").getTime(),
    value: 350,
  },
]
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
        <Graph data={data} />
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
