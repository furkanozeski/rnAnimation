import React from 'react';
import AppProviderProp from '@src/types/AppProvider/AppProviderPropType';
import { View } from 'react-native';


function ApplicationProvider(_props: AppProviderProp) {
  const { children } = _props;

  return (
    <View>
      {children}
    </View>
  );
}

export default ApplicationProvider;
