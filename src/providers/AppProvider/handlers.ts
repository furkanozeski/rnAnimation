import { authentication } from '@src/data/FireBase/FireBase';
import { AppDispatch } from '@src/store';
import AppConfig from '@src/types/AppConfig/Appconfig';

// eslint-disable-next-line import/prefer-default-export
export function checkUser(dispatch: AppDispatch) {
  const _currentUser = authentication.currentUser;
  const config: AppConfig & { proceedTo: string, shouldShowOnboard: boolean } = {
    isAnonymous: false,
    currentUser: null,
    collectionRef: null,
    collectionQuery: null,
    proceedTo: '',
    shouldShowOnboard: false,
  };

  if (_currentUser === null) {
    config.currentUser = null;
    config.isAnonymous = false;
    config.proceedTo = 'signin';
    config.shouldShowOnboard = true;
  } else if (_currentUser.isAnonymous) {
    config.currentUser = _currentUser.toJSON();
    config.isAnonymous = true;
    config.proceedTo = 'home';
    config.shouldShowOnboard = true;
  } else {
    config.currentUser = _currentUser.toJSON();
    config.isAnonymous = false;
    config.proceedTo = 'home';
    config.shouldShowOnboard = true;
  }
  callInitializeWatcherWithPayload(dispatch, config);
}

function callInitializeWatcherWithPayload(dispatch: AppDispatch, config: AppConfig & {
  proceedTo: string;
  shouldShowOnboard: boolean;
}) {
  dispatch({
    type: 'INITIALIZE_CONTROL_CALL',
    payload: {
      config,
    }
  });
}
