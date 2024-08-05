// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useUser } from "@/stores/useUser";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJrnNds3M2wGRBCLB3qIKIk51VVWKYkWQ",
  authDomain: "cat-roster.firebaseapp.com",
  projectId: "cat-roster",
  storageBucket: "cat-roster.appspot.com",
  messagingSenderId: "187194511935",
  appId: "1:187194511935:web:374c95770702e0ca10de8a",
  measurementId: "G-6ZTK0T1BXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const provider = new GoogleAuthProvider();
const auth = getAuth();

const signInWithGoogle = async function(){
  try {
    const result = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    console.log({user, token})
    const userStore = useUser();
    userStore.setUser(user);
    // ...
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }
}

export {signInWithGoogle}