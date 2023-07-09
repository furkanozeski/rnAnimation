import { firebase } from '@react-native-firebase/firestore';
import TaskModel from '@src/types/Task/TaskModel';
import { firestoreDB } from '../FireBase/FireBase';


export const getTasks = async (pathWithToken: string) => {
  let result;
  try {
    result = await firestoreDB
      .collection('task').doc(pathWithToken)
      .collection('task')
      .get();

  } catch (error) {
    // todo
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
  try {
    result = await firestoreDB
      .collection('task')
      .doc(token)
      .collection('tasks')
      .add(body);
  } catch (error) {
    // todo
  } 
  return result;
};

