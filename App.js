import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
const Quiz = ({ navigation }) => (
  <View>
    <Text>This is the Quiz view</Text>
  </View>
);
const list = Array.apply(null, Array(50)).map(function (x, i) { return {key: i}; })

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={list}
      renderItem={({item}) =>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.item}>{item.key}</Text>
      </TouchableOpacity>
    }
    />
  </View>
);
const log = function () {
  console.log('new quiz')
}
const Stack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Quizzes',
      headerRight: <Button color={'green'} title={'New Quiz'} onPress={log}/>,
    }),
  },
  Quiz: {
    screen: Quiz
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Stack />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
});
