import React, {Component} from 'react';
import { Container, H1, H3, Button, Text, View } from 'native-base';

export default QuizHome = ({navigation}) => (
  <Container>
    <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <H1>{navigation.state.params.key}</H1>
      <H3>{`${navigation.state.params.questions.length} cards`}</H3>
    </View>
    {
      navigation.state.params.questions.length > 0 &&
      <View style={{ flexDirection: 'row', flex: 1, position: 'absolute', bottom: 0, left: 0, right: 0, justifyContent: 'center', padding: 15 }}>
        <Button iconLeft onPress={() => navigation.navigate('Quiz', navigation.state.params)}>
          <Text>Start Quiz</Text>
        </Button>
      </View>
    }
  </Container>
);
