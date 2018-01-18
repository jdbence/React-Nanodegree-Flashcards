import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {  Button, Text } from 'native-base';
import Quiz from './quiz';
import QuizHome from './quizhome';
import QuizAddCard from './quizaddcard';
import NewQuiz from './newquiz';
import Home from './home';
import { trunc } from '../../utils/string';

export default Stack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Quizzes',
      headerRight: <Button onPress={() => navigation.navigate('NewQuiz', navigation.state.params)}><Text>New Quiz</Text></Button>,
      headerStyle: {paddingRight: 5}
    }),
  },
  QuizHome: {
    screen: QuizHome,
    navigationOptions: ({navigation}) => ({
      title: `${trunc(navigation.state.params.title)}`,
      headerRight: <Button bordered onPress={() => navigation.navigate('QuizAddCard', navigation.state.params)}><Text primary>Add Card</Text></Button>,
      headerStyle: {paddingRight: 5}
    }),
  },
  QuizAddCard: {
    screen: QuizAddCard,
    navigationOptions: ({navigation}) => ({
      title: `Add Card`
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: `${trunc(navigation.state.params.title)}`
    }),
  },
  NewQuiz:  {
    screen: NewQuiz,
    navigationOptions: ({navigation}) => ({
      title: `New Quiz`
    }),
  }
})
