import React, {Component} from 'react';
import { Button, Container, DeckSwiper, Fab, Icon, Toast, Text, View } from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import QuizCard from '../quizcard';
import QuizComplete from '../quizcomplete';
import { clearLocalNotification, setLocalNotification } from '../../utils/notifications';

export default class Quiz extends Component {
  state={
    card: 0,
    totalCards: 0,
    totalCorrect: 0
  }
  componentWillMount(){
    clearLocalNotification()
    setLocalNotification()
    this.setState({...this.state, totalCards: this.props.navigation.state.params.questions.length})
  }
  onSwipe = (answer=true, animate=false) => {
    this.setState({
      ...this.state,
      card: this.state.card + 1,
      totalCorrect: this.state.totalCorrect + (answer ? 1 : 0)
    }, () => {
      if(animate){
        if(answer){
          this.deckSwiper._root.swipeRight()
        } else {
          this.deckSwiper._root.swipeLeft()
        }
      }
    })
  }
  restartQuiz = () => {
    const questions = this.props.navigation.state.params.questions
    this.setState({...this.state, card: 0, totalCorrect: 0})
    this.deckSwiper._root.setState({
      disabled: false,
      lastCard: questions.length === 1,
      selectedItem: questions[0],
      selectedItem2: questions[1] || questions[0],
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
        <Text>{!done ? `${Math.min(card+1, totalCards)}/${totalCards}` : ' '}</Text>
        <View>
          <DeckSwiper
            ref={(c) => this.deckSwiper = c}
            looping={false}
            dataSource={questions}
            renderEmpty={() => <QuizComplete text={'Quiz Complete!'} correct={totalCorrect} total={totalCards} done={done}/>}
            renderItem={QuizCard}
            onSwipeRight={()=>this.onSwipe()}
            onSwipeLeft={()=>this.onSwipe(false)}
          />
        </View>
        { !done
          ?<View style={styles.view}>
            <Fab style={{ backgroundColor: '#DD5144' }} position={'bottomLeft'} onPress={() => this.onSwipe(false, true)}>
              <Icon name="thumbs-down" />
            </Fab>
            <Fab style={{ backgroundColor: '#34A34F' }} onPress={() => this.onSwipe(true, true)}>
              <Icon name="thumbs-up" />
            </Fab>
            <Button iconLeft onPress={() => Alert.alert('Answer', questions[card].answer)}>
              <Text>See Answer</Text>
            </Button>
          </View>
          :<View style={styles.view}>
            <Button iconLeft onPress={this.restartQuiz}>
              <Text>Restart Quiz</Text>
            </Button>
          </View>
        }
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    padding: 15
  }
})
