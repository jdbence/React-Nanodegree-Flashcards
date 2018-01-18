import { Notifications, Permissions } from "expo";
import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'UdaciFlashCard:Notification';

export const clearLocalNotification = () =>  {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
  }

export const setLocalNotification = () =>  {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if(data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status})=> {
            if(status === 'granted'){
              Notifications.cancelAllScheduledNotificationsAsync()
              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(1)
              Notifications.scheduleLocalNotificationAsync (
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

export const createNotification = () =>  {
  return {
    title: "Do your FlashCards!",
    body: "Don't forget to do your FlashCards today!",
    ios: {sound: true},
    android: {sound: true, vibrate: true, priority: 'high', sticky: false}
  }
}
