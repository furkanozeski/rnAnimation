import _firebase, { ReactNativeFirebase } from '@react-native-firebase/app';
import _auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import _firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

abstract class IFirestore {
  firebase: ReactNativeFirebase.FirebaseApp = _firebase.app();

  auth: FirebaseAuthTypes.Module = _auth();
  
  firestore: FirebaseFirestoreTypes.Module = _firestore();
}


const Firestore: IFirestore = {
  firebase: _firebase.app(),
  auth: _auth(),
  firestore: _firestore()
};

export default Firestore;
