import React, {Component} from 'react';
import { Container, H1, H3, Button, Text, View } from 'native-base';

export default QuizHome = ({navigation}) => {
  const { params } = navigation.state
  return (
    <Container>
      <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <H1>{params.title||params.key}</H1>
        <H3>{`${params.questions.length} cards`}</H3>
      </View>
      {
        params.questions.length > 0 &&
        <View style={{ flexDirection: 'row', flex: 1, position: 'absolute', bottom: 0, left: 0, right: 0, justifyContent: 'center', padding: 15 }}>
          <Button iconLeft onPress={() => navigation.navigate('Quiz', params)}>
            <Text>Start Quiz</Text>
          </Button>
        </View>
      }
    </Container>
  )
};
