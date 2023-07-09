
import React, { useCallback, useEffect } from 'react';
import AppProviderProp from '@src/types/AppProvider/AppProviderPropType';
import { useAppDispatch } from '@src/hooks/Store';
import { AppDispatch } from '@src/store';
import { checkUser } from './handlers';
import ThemeProvider from '../ThemeProvider/ThemeProvider';


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
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default ApplicationProvider;
