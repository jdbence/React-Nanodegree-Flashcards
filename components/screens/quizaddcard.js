import React, {Component} from 'react';
import { Container, Form, Item, Label, Input, Button, Text, View, Toast } from 'native-base';

export default class QuizAddCard extends Component {
  state={
    question: '',
    answer: ''
  }
  onDone = () => {
    const { question, answer} = this.state
    if(question.length > 0 && answer.length > 0){
      this.props.navigation.goBack()
      setTimeout(()=> {
        this.props.screenProps.addQuestion(this.props.navigation.state.params.key, {
          text: question,
          answer
        })
        Toast.show({
          text: 'Card has been added',
          position: 'bottom'
        })
      }, 1000)
    }
  }
  render(){
    return (
      <Container>
        <View>
            <Form style={{padding: 10}}>
              <Item floatingLabel error={this.state.question === ''}>
                <Label>Question</Label>
                <Input onChangeText={(text) => this.setState({question: text})}/>
              </Item>
              <Item floatingLabel error={this.state.answer === ''} last>
                <Label>Answer</Label>
                <Input onChangeText={(text) => this.setState({answer: text})}/>
              </Item>
            </Form>
            <Button block onPress={this.onDone} style={{margin: 10}}><Text>Done</Text></Button>
          </View>
       </Container>
    )
  }
}
