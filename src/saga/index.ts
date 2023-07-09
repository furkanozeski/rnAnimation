import { all } from 'redux-saga/effects';
import { initializeControleWatcher } from './AppEngine/AppSaga';

function* root_saga() {
  yield all([
    initializeControleWatcher()
  ]);
}

export default root_saga;
