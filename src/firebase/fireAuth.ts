// Import the functions you need from the SDKs you need
import { browserLocalPersistence, getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, onAuthStateChanged } from 'firebase/auth'
import { useUser } from '@/stores/useUser'
import { firebaseApp } from '@/firebase/fireInit'



export const fireAuth = getAuth(firebaseApp)
const googleAuthProvider = new GoogleAuthProvider()

export const fireSignOut = async function () {
  try {
    await fireAuth.signOut()
  } catch (error) {
    console.error(error)
  }
}


const signInWithGoogle = async function () {
  try {
    await setPersistence(fireAuth, browserLocalPersistence)
    const result = await signInWithPopup(fireAuth, googleAuthProvider)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result)
    if (credential === null) {
      throw new Error('credential is null')
      return
    }
    const token = credential.accessToken
    // The signed-in user info.
    const user = result.user
    // IdP data available using getAdditionalUserInfo(result)
    console.log({ user, token })
    const userStore = useUser()
    userStore.setUser(user)
    // ...
  } catch (error: any) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message
    // The email of the user's account used.
    const email = error.customData.email
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error)

    console.error({
      errorCode,
      errorMessage,
      email,
      credential
    })
    // ...
  }
}

export { signInWithGoogle }
