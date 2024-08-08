import { firebaseApp } from '@/firebase/fireInit.js'
import { collection, getDocs } from 'firebase/firestore'
import { doc, setDoc, getFirestore, getDoc } from 'firebase/firestore'

export const db = getFirestore(firebaseApp)

export const querySnapshot = await getDocs(collection(db, 'cat-lists'))
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`)
})

export const fireGetUserListById = async (uid) => {
  try {
    // Create a reference to the document with the given uid
    const docRef = doc(db, 'cat-lists', uid)

    // Fetch the document from Firestore
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      // If the document exists, return the data
      console.log('Document data:', docSnap.data())
      return docSnap.data()
    } else {
      // If the document does not exist, log a message
      console.log('No such document!')
      return null
    }
  } catch (e) {
    console.error('Error retrieving document: ', e)
    return null
  }
}

export const fireAddUserList = async (uid, availableList, calledList) => {
  try {
    // Set the document ID to be the same as the uid
    const docRef = doc(db, 'cat-lists', uid)

    await setDoc(docRef, {
      uid: uid,
      availableList: availableList,
      calledList: calledList
    })

    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

// // Example data
// const uid = "user_123";
// const availableList = [
//   { name: "Alice", id: "a1" },
//   { name: "Bob", id: "b2" },
// ];
// const calledList = [
//   { name: "Charlie", id: "c3" },
// ];
//
//
// await addUserList(uid, availableList, calledList);
