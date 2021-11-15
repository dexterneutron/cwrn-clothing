import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config  = {
    apiKey: "AIzaSyB499mu7TsBi3NpWr0n_UcfDv5z_mHS1xk",
    authDomain: "crwn-db-1dd61.firebaseapp.com",
    projectId: "crwn-db-1dd61",
    storageBucket: "crwn-db-1dd61.appspot.com",
    messagingSenderId: "280141144584",
    appId: "1:280141144584:web:256853f250bfa593f9a7bd"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, ...aditionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get()
    
    if(!snapshot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...aditionalData
        });
      }
      catch(error){
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;