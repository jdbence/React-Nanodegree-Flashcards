import React, {Component} from 'react';
import { Container, Item, Label, Input, Button, Text, View, Form } from 'native-base';
import { Keyboard, StyleSheet } from 'react-native';
import { token } from '../../utils/string';

export default class NewQuiz extends Component {
  state={
    title: ''
  }
  onDone = () => {
    const { title }  = this.state
    if(title !== ''){
      const item = {
        key: token(),
        title,
        questions: []
      }
      this.props.screenProps.addQuiz(item)
      Keyboard.dismiss()
      this.props.navigation.goBack()
      setTimeout(() => this.props.navigation.navigate('QuizHome', item), 300)
    }
  }
  render(){
    return (
      <Container>
        <View>
            <Form style={styles.form}>
              <Item floatingLabel error={this.state.title === ''} style={styles.item}>
                <Label>Title</Label>
                <Input onChangeText={(text) => this.setState({title: text})}/>
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
