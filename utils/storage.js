import { AsyncStorage } from 'react-native';
import { token } from './string';

const STORAGE_KEY = 'UdaciFlashCard:Storage';

export const getQuizzes = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(JSON.parse)
    .then(data => data === null ? [] : sanitize(data.quizzes))
}

export const setQuizzes = (quizzes) => {
  AsyncStorage.getItem(STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      data = data === null ? {} : data
      data.quizzes = sanitize(quizzes)
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}

const sanitize = quizzes => quizzes.map(q => !q.title || !q.key ? {...q, title: q.key || `Quiz ${token(4)}`, key: token()} : q)
