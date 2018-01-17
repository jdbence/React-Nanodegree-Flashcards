import React, {Component} from 'react';
import { Button, Container, DeckSwiper, Toast, Text, View } from 'native-base';
import QuizCard from '../quizcard';
import QuizComplete from '../quizcomplete';

export default class Quiz extends Component {
  state={
    card: 0,
    totalCards: 0,
    totalCorrect: 0
  }
  componentWillMount(){
    this.setState({...this.state, totalCards: this.props.navigation.state.params.questions.length})
  }
  onSwipe = (answer=true) => {
    this.setState({...this.state, card: this.state.card + 1, totalCorrect: this.state.totalCorrect + (answer ? 1 : 0)})
  }
  restartQuiz = () => {
    const questions = this.props.navigation.state.params.questions
    this.setState({...this.state, card: 0, totalCorrect: 0})
    this.deckSwiper._root.setState({
      disabled: false,
      lastCard: false,
      selectedItem: questions[0],
      selectedItem2: questions[1],
      card1Top: true,
      card2Top: false
    })
  }
  render() {
    const { card, totalCards, totalCorrect} = this.state
    const done = card >= totalCards
    const questions = this.props.navigation.state.params.questions
    return (
      <Container>
        { !done && <Text>{`${Math.min(card+1, totalCards)}/${totalCards}`}</Text> }
        <View>
          <DeckSwiper
            ref={(c) => this.deckSwiper = c}
            looping={false}
            dataSource={questions}
            renderEmpty={() => QuizComplete({text: 'Complete', name: 'Three', totalCorrect, done})}
            renderItem={QuizCard}
            onSwipeRight={()=>this.onSwipe()}
            onSwipeLeft={()=>this.onSwipe(false)}
          />
        </View>
        <View style={{ flexDirection: 'row', flex: 1, position: 'absolute', bottom: 0, left: 0, right: 0, justifyContent: 'center', padding: 15 }}>
          { !done
          ?<Button iconLeft onPress={()=> Toast.show({
              text: questions[card].answer,
              position: 'bottom',
              buttonText: 'Ok',
              duration: 10000,
              type: 'danger'
            })}>
            <Text>See Answer</Text>
          </Button>
          :<Button iconLeft onPress={this.restartQuiz}>
            <Text>Restart Quiz</Text>
          </Button>
          }
        </View>
      </Container>
    )
  }
}
