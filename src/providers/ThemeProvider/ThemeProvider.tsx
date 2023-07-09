import React, {
  ReactElement, createContext, useCallback, useEffect, useState
} from 'react';
import { useAppDispatch, useAppSelector } from '@src/hooks/Store';
import Theme from '@src/types/Theme/themeStore';
import { Text, View, useColorScheme } from 'react-native';
import { THEME_LOCAL_KEY } from '@src/constants/Theme';
import { SetTheme } from '@src/store/Theme';
import setTheme, { getTheme } from './handler';


const ThemeValueContext = createContext<Theme | undefined>({ themeName: 'light', colorScheme: {}, prevColorSchema: undefined });

// eslint-disable-next-line @typescript-eslint/ban-types
const ThemeStateContext = createContext<Function | null>(null);

export default function ThemeProvider({ children }: { children: ReactElement | ReactElement[] }) {
  const [shouldProceed, setShouldProceed] = useState<boolean>(false);
  const theme = useAppSelector((state) => state.theme);
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const themeInformation = getTheme();
    if (themeInformation === undefined) {
      const result = setTheme(THEME_LOCAL_KEY, theme);
      setShouldProceed(result);
    } else {
      dispatch(SetTheme(JSON.parse(themeInformation).themeName));
      setShouldProceed(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorScheme, dispatch, shouldProceed]);

  const dispatchCallback = useCallback(
    (themeMode: string) => {
      dispatch(SetTheme(themeMode));
    },
    [dispatch],
  );


  const setThemeCallback = useCallback(
    () => {
      setTheme(THEME_LOCAL_KEY, theme);
    },
    [theme],
  );

  const useTheme = useCallback((themeMode: string) => {
    dispatchCallback(themeMode);
    setThemeCallback();
  }, [dispatchCallback, setThemeCallback]);

  if (!shouldProceed) {
    return (
      <View>
        <Text> should wait when configs are loading </Text>
      </View>
    );
  }

  return (
    <ThemeValueContext.Provider value={theme}>
      <ThemeStateContext.Provider value={useTheme}>

        {children}

      </ThemeStateContext.Provider>
    </ThemeValueContext.Provider>
  );
}
