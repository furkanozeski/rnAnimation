import { put, takeLatest } from 'redux-saga/effects';


function* InitializeControl(action) {
  try {
    yield put({ type: 'AppConfig/SetIsAnonymous', payload: action.payload.config.isAnonymous });
  } catch (error) {
    console.log('InitializeControl error', error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* initializeControleWatcher() {
  yield takeLatest('INITIALIZE_CONTROL_CALL', InitializeControl); 
}
