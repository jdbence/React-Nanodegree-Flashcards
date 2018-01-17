import React, {Component} from 'react';
import { List, ListItem, Body, Text, View } from 'native-base';

export default Home = ({ navigation, screenProps }) => (
  <View style={{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }}>
    {screenProps.quizzes.length > 0 &&
    <List
      dataArray={screenProps.quizzes}
      renderRow={item =>
        <ListItem onPress={() => navigation.navigate('QuizHome', item)}>
          <Body>
            <Text >{item.key}</Text>
            <Text note>{item.questions.length} cards</Text>
          </Body>
        </ListItem>
      }
    />
    }
  </View>
);
