import Firebase from "firebase";
export const DB_CONFIG = {
  apiKey: "AIzaSyAFfHsazMMOGvavqaQ0B81JNP0nHS9iG8A",
  authDomain: "react-native-todo-cf5c9.firebaseapp.com",
  databaseURL: "https://react-native-todo-cf5c9.firebaseio.com",
  projectId: "react-native-todo-cf5c9",
  storageBucket: "react-native-todo-cf5c9.appspot.com",
  messagingSenderId: "318453220667",
  appId: "1:318453220667:web:3adf3ce65006a0729ce31e",
  measurementId: "G-LSPSFJVK7K"
};
const app = Firebase.initializeApp(DB_CONFIG);
export const db = app.database();