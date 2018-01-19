[get-zip]: https://github.com/jdbence/React-Nanodegree-Flashcards/archive/master.zip
[get-tgz]: https://github.com/jdbence/React-Nanodegree-Flashcards/archive/master.tar.gz
[clone-http]: https://github.com/jdbence/React-Nanodegree-Flashcards.git
[clone-svn]: https://github.com/jdbence/React-Nanodegree-Flashcards
[clone-ghwin]: github-windows://openRepo/https://github.com/jdbence/React-Nanodegree-Flashcards
[clone-ghmac]: github-mac://openRepo/https://github.com/jdbence/React-Nanodegree-Flashcards

## FlashCards (Android)
React Native Android application that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

![alt text](react_native.gif?raw=true "Flash Cards")

#### Controls
* Swipe left for incorrect
* Swipe right for correct

### Installation

* Clone git repository via [https][clone-http] or with the Github [Windows][clone-ghwin] or [Mac][clone-ghmac] clients.
* Download as [zip][get-zip] or [tar.gz][get-tgz]
* Checkout with [svn][clone-svn]

### Dependencies
```JS
  // install yarn globally and install local dependencies
  npm install -g yarn && yarn install
```

### Commands
```JS
  yarn android   // starts packager and connects to android emulator
  yarn start     // starts packager
```

## License

Project is released under the [MIT License](http://opensource.org/licenses/MIT).

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
