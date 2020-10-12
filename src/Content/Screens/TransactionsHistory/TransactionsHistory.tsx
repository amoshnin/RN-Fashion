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
import Theme from "~/Content/Shared/Helpers/Constants/Theme/Theme"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}
const data: Array<PointType> = [
  {
    date: new Date("2019-09-01").getTime(),
    value: 29,
    color: Theme.colors.primary,
  },
  {
    date: new Date("2019-10-05").getTime(),
    value: 0,
    color: "#FF0058",
  },
  {
    date: new Date("2019-11-11").getTime(),
    value: 32.42,
    color: "#FFC641",
  },
  {
    date: new Date("2019-11-11").getTime(),
    value: 65.42,
    color: "#FF0058",
  },
  {
    date: new Date("2019-11-11").getTime(),
    value: 80.42,
    color: "#FFC641",
  },
  {
    date: new Date("2019-11-11").getTime(),
    value: 70.42,
    color: "#FF0058",
  },
  {
    date: new Date("2019-11-11").getTime(),
    value: 45.42,
    color: Theme.colors.primary,
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
