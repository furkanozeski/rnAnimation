import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

type TaskModel = {
  title: string,
  description: string,
  priority: string,
  category: FirebaseFirestoreTypes.DocumentFieldType,
  create_date: FirebaseFirestoreTypes.FieldValue,
  due_date: FirebaseFirestoreTypes.FieldValue,
  update_date: FirebaseFirestoreTypes.FieldValue,
  is_abolished: boolean,
};

export default TaskModel;
