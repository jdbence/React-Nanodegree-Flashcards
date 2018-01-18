import React, {Component} from 'react';
import { Container, View,Text } from 'native-base';
import QuizCard from './quizcard';

export default QuizComplete = item => {
  const {correct, text, total, done} = item
  return (
    <Container>
      <View>
        <QuizCard text={text} subtext={done ? `${correct} out of ${total} Correct` : ' '}/>
      </View>
    </Container>
  );
}
