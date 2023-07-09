import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import root_saga from '@src/saga';
import Theme from './Theme';
import AppConfig from './App';

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    theme: Theme,
    appConfig: AppConfig
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SagaMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

SagaMiddleware.run(root_saga);
