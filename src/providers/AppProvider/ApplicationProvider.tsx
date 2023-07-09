
import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import AppProviderProp from '@src/types/AppProvider/AppProviderPropType';
import { useAppDispatch } from '@src/hooks/Store';
import { AppDispatch } from '@src/store';
import { checkUser } from './utils';


function ApplicationProvider(_props: AppProviderProp) {
  const { children } = _props;

  const dispatch = useAppDispatch();

  const userConfig = useCallback(
    (dispatch: AppDispatch) => {
      checkUser(dispatch);
    },
    [],
  );


  useEffect(() => {
    userConfig(dispatch);

  }, [userConfig, dispatch]);

  return (
    <View>
      {children}
    </View>
  );
}

export default ApplicationProvider;
