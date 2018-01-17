import { AppLoading, Font } from "expo";
import React, {Component} from 'react';
import { Root } from 'native-base';
import { setLocalNotification } from './utils/notifications';
import { getQuizzes, setQuizzes} from './utils/storage';
import Stack from './components/screens/stack';

export default class App extends Component {
  state = {
    isReady: false,
    quizzes: []
  }
  componentWillMount() {
    this.loadFonts();
    setLocalNotification();
    getQuizzes().then(quizzes => {
      this.setState({quizzes})
    })
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({
      isReady: true
    });
  }
  addQuiz = (quiz) => {
    const quizzes = [...this.state.quizzes, quiz]
    this.setState({
      ...this.state,
      quizzes
    })
    setQuizzes(quizzes)
  }
  addQuestion = (quizID, question) => {
    const quizzes = [...this.state.quizzes]
    const index = quizzes.findIndex(q => q.key === quizID)
    if(index !== -1){
      quizzes[index].questions.push(question)
      this.setState({
        ...this.state,
        quizzes
      })
      setQuizzes(quizzes)
    }
  }
  render() {
    const { quizzes, isReady } = this.state
    if (!isReady) {
      return <AppLoading />;
    }
    return (<Root>
      <Stack screenProps={{quizzes, addQuiz: this.addQuiz, addQuestion: this.addQuestion}} />
    </Root>)
  }
}
