import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import AppConfig from '@src/types/AppConfig/Appconfig';

const initialState: AppConfig = {
  isAnonymous: false,
  collectionRef: null,
  collectionQuery: null,
};


const appConfigReducer = createSlice({
  name: 'AppConfig',
  initialState,
  reducers: {
    SetIsAnonymous: (state, action: PayloadAction<boolean>) => {
      state.isAnonymous = action.payload;
    },
    SetCollectionRef: (state, action: PayloadAction<FirebaseFirestoreTypes.CollectionReference>) => {
      state.collectionRef = action.payload;
    },
    SetCollectionQuery: (state, action: PayloadAction<FirebaseFirestoreTypes.QuerySnapshot>) => {
      state.collectionQuery = action.payload;
    }
  }
});

export const { SetIsAnonymous, SetCollectionRef, SetCollectionQuery } = appConfigReducer.actions;

export default appConfigReducer.reducer;
