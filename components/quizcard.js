import React, {Component} from 'react';
import { Card, CardItem, H1, Left, Body, Icon } from 'native-base';

export default QuizCard = item => (
  <Card style={{ elevation: 3, minHeight: 300, justifyContent: 'center', alignItems: 'center' }}>
    <CardItem>
      <H1 style={{textAlign: 'center'}}>{item.text}</H1>
    </CardItem>
  </Card>
);
