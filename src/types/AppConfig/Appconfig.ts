import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

type AppConfig = {
  isAnonymous: boolean,
  collectionRef: FirebaseFirestoreTypes.CollectionReference | null,
  collectionQuery: FirebaseFirestoreTypes.QuerySnapshot | null,
}


export default AppConfig;
