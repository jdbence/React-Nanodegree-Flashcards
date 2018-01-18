import React, {Component} from 'react';
import { Body, Card, CardItem, H1, Left, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export default QuizCard = item => (
  <Card style={styles.card}>
    <CardItem>
      <Body style={styles.body}>
        <H1>{item.text}</H1>
        {item.subtext && <Text primary>{item.subtext}</Text>}
      </Body>
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    minHeight: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
})
