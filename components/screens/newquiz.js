import React, {Component} from 'react';
import { Container, Item, Label, Input, Button, Text, View, Form } from 'native-base';
import { Keyboard } from 'react-native';

export default class NewQuiz extends Component {
  state={
    title: ''
  }
  onDone = () => {
    const item = {
      key: this.state.title,
      questions: []
    }
    this.props.screenProps.addQuiz(item)
    Keyboard.dismiss()
    this.props.navigation.goBack()
    setTimeout(() => this.props.navigation.navigate('QuizHome', item), 300)
  }
  render(){
    return (
      <Container>
        <View>
            <Form style={{padding: 10}}>
              <Item floatingLabel error={this.state.title === ''}>
                <Label>Title</Label>
                <Input onChangeText={(text) => this.setState({title: text})}/>
              </Item>
            </Form>
            <Button block onPress={this.onDone} style={{margin: 10}}><Text>Done</Text></Button>
          </View>
       </Container>
    )
  }
}
