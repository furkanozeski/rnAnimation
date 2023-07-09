
import React, { useEffect } from 'react';
import { View } from 'react-native';
import AppProviderProp from '@src/types/AppProvider/AppProviderPropType';
import { useAppDispatch, useAppSelector } from '@src/hooks/Store';
import { authentication } from '@src/data/FireBase/FireBase';

function ApplicationProvider(_props: AppProviderProp) {
  const { children } = _props;

  const dispatch = useAppDispatch();
  const appConfig = useAppSelector((s) => s.appConfig);

  useEffect(() => {
    if (appConfig.isAnonymous === null || !appConfig.isAnonymous || appConfig.isAnonymous) {
      dispatch({ type: 'INITIALIZE_CONTROL_CALL', payload: authentication.currentUser?.isAnonymous });
    }
  }, [appConfig, dispatch]);


  return (
    <View>
      {children}
    </View>
  );
}

export default ApplicationProvider;
