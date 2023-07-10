import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';


type AppConfig = {
  isAnonymous: boolean,
  showOnboarding?: boolean,
  navigationDestination?: string,
  currentUser?: FirebaseAuthTypes.User | null | any,
  collectionRef: FirebaseFirestoreTypes.CollectionReference | null,
  collectionQuery: FirebaseFirestoreTypes.QuerySnapshot | null,
}


export default AppConfig;
