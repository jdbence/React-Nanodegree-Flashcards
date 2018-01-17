import { AsyncStorage } from 'react-native';
const STORAGE_KEY = 'UdaciFlashCard:Storage';

export const getQuizzes = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(JSON.parse)
    .then(data => data === null ? [] : data.quizzes)
}

export const setQuizzes = (quizzes) => {
  AsyncStorage.getItem(STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      data = data === null ? {} : data
      data.quizzes = quizzes
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}
