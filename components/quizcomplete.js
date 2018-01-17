import React, {Component} from 'react';
import { H1, Text, View } from 'native-base';

export default QuizComplete = item => (
    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <H1>Quiz Complete!</H1>
      {item.done && <Text>{`${item.totalCorrect} Correct`}</Text>}
    </View>
);
