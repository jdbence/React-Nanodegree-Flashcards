import React, {Component} from 'react';
import { Container, Form, Item, Label, Input, Button, Text, View, Toast } from 'native-base';
import { StyleSheet } from 'react-native';

export default class QuizAddCard extends Component {
  state={
    question: '',
    answer: ''
  }
  onDone = () => {
    const { question, answer} = this.state
    const { params } = this.props.navigation.state
    if(question.length > 0 && answer.length > 0){
      this.props.navigation.goBack()
      setTimeout(()=> {
        this.props.screenProps.addQuestion(params.key, {
          text: question,
          answer
        })
        Toast.show({
          text: 'Card has been added',
          position: 'top'
        })
      }, 1000)
    }
  }
  render(){
    return (
      <Container>
        <View>
            <Form style={styles.form}>
              <Item floatingLabel error={this.state.question === ''} style={styles.item}>
                <Label>Question</Label>
                <Input onChangeText={(text) => this.setState({question: text})}/>
              </Item>
              <Item floatingLabel error={this.state.answer === ''} style={styles.item}>
                <Label>Answer</Label>
                <Input onChangeText={(text) => this.setState({answer: text})}/>
              </Item>
            </Form>
            <Button block onPress={this.onDone} style={styles.button}><Text>Done</Text></Button>
          </View>
       </Container>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 10
  },
  item: {
    marginLeft: 0
  },
  button: {
    margin: 10
  },
})
