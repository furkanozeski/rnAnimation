import { configureStore } from '@reduxjs/toolkit';
import Theme from './Theme';


export const store = configureStore({
  reducer: {
    theme: Theme
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
