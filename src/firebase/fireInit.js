// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCJrnNds3M2wGRBCLB3qIKIk51VVWKYkWQ',
  authDomain: 'cat-roster.firebaseapp.com',
  projectId: 'cat-roster',
  storageBucket: 'cat-roster.appspot.com',
  messagingSenderId: '187194511935',
  appId: '1:187194511935:web:374c95770702e0ca10de8a',
  measurementId: 'G-6ZTK0T1BXM'
}

console.log('initFirebase has run')
export const firebaseApp = initializeApp(firebaseConfig)
