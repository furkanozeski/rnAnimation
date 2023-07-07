import React from 'react';
import AppProviderProp from '@src/types/AppProvider/AppProviderPropType';
import {
  View, useColorScheme, Text, StyleSheet
} from 'react-native';
import { useAppDispatch, useAppSelector } from '@src/hooks/StoreHooks';
import { SetTheme } from '@src/store/Theme';
import Theme from '@src/types/Theme/themeStore';
import { TouchableOpacity } from 'react-native-gesture-handler';


function ApplicationProvider(_props: AppProviderProp) {
  const { children } = _props;
  const dispatch = useAppDispatch();
  const themeInfo = useColorScheme();

  const theme = useAppSelector((e) => e.theme);
  const setTheme = () => {
    if (theme.themeName === 'light') {
      dispatch(SetTheme('dark'));
    } else {
      dispatch(SetTheme('light'));
    }
  };
  return (
    <View style={styles(theme).styleComponent}>
      <TouchableOpacity
        style={styles(theme).buttonTStyle}
        onPress={setTheme}
      >
        <Text style={styles(theme).buttonText}>
          SetTheme
        </Text>
      </TouchableOpacity>
      {children}
    </View>
  );
}

const styles = (colorScheme: Theme) => StyleSheet.create({
  styleComponent: {
    backgroundColor: colorScheme.colorScheme.surface,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTStyle: {
    backgroundColor: colorScheme.colorScheme.primary,
    padding: 10
  },
  buttonText: {
    padding: 10,
    color: colorScheme.colorScheme.onPrimary
  },
});

export default ApplicationProvider;
