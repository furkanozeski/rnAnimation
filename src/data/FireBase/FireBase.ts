import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// eslint-disable-next-line import/prefer-default-export
export const firestoreDB = firestore();

export const authentication = auth();
