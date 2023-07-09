import { firebase } from '@react-native-firebase/firestore';
import TaskModel from '@src/types/Task/TaskModel';
import Firestore from '../FireBase/FireBase';

const currentUserCollection = Firestore.firestore.collection;


export const getTasks = async (pathWithToken: string) => {
  let result;
  try {
    result = await currentUserCollection(pathWithToken).doc().get();

  } catch (error) {
    console.log('error get', error);
  } 
  return result;
};

export const createTask = async (token: string) => {
  let result;
  const body: TaskModel = {
    title: '123213',
    description: '312312',
    priority: '312312',
    category: null,
    create_date: firebase.firestore.FieldValue.serverTimestamp(),
    due_date: firebase.firestore.FieldValue.serverTimestamp(),
    update_date: firebase.firestore.FieldValue.serverTimestamp(),
    is_abolished: false
  };
  console.log('user', token);
  try {
    result = await firebase.firestore().collection('task').doc().set(body);
    console.log('result => ', result);
  } catch (error) {
    console.log('error get', error);
  } 
  return result;
};

