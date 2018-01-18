import React, {Component} from 'react';
import { ListItem, Body, Text, View } from 'native-base';
import { StyleSheet, FlatList } from 'react-native';

export default Home = ({ navigation, screenProps }) => (
  <View style={styles.view}>
    {screenProps.quizzes.length > 0 &&
    <FlatList
      data={screenProps.quizzes}
      renderItem={({item}) => {
        const { key, title, questions: { length }} = item;
        return (
          <ListItem style={styles.item} onPress={() => navigation.navigate('QuizHome', item)}>
            <Body>
              <Text>{title}</Text>
              <Text note>{length} cards</Text>
            </Body>
          </ListItem>
        )
      }}
    />
    }
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  item:  {
    marginLeft: 0
  }
})
