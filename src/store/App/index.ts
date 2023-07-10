import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import AppConfig from '@src/types/AppConfig/Appconfig';

const initialState: AppConfig = {
  isAnonymous: true,
  showOnboarding: true,
  navigationDestination: 'onboarding',
  collectionRef: null,
  collectionQuery: null,
  currentUser: null
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
    },
    SetOnboardingStatus: (state, action: PayloadAction<boolean>) => {
      state.showOnboarding = action.payload;
    },
    SetNavigationDestination: (state, action: PayloadAction<string>) => {
      state.navigationDestination = action.payload;
    }
  }
});

export const { 
  SetIsAnonymous, 
  SetCollectionRef, 
  SetCollectionQuery,
  SetOnboardingStatus,
  SetNavigationDestination
} = appConfigReducer.actions;

export default appConfigReducer.reducer;
