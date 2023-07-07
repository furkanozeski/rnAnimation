import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import Theme from '@src/types/Theme/themeStore';

const _light = {
  primary: '#57FFBD',
  onPrimary: '#0F0F0F',
  secondary: '#3976CC',
  onSecondary: '#F0E2E7',
  tertiary: '#121014',
  onTertiary: '#DDEEFF',
  surface: '#A7A2A9',
  onSurface: '#303438',
  background: '#FFFFFF',
};

const _dark = {
  primary: '#363636',
  onPrimary: '#CFCFCF',
  secondary: '#8588E7',
  onSecondary: '#FFFFFF',
  tertiary: '#121014',
  onTertiary: '#DDEEFF',
  surface: '#121212',
  onSurface: '#C6C6C6',
  background: '#000000',
};

const setThemeState = (colorSchemeName: string, state: Draft<Theme>): Draft<Theme> => { 
  const _state = { ...state };
  if (colorSchemeName === 'light') {
    state.prevColorSchema = { ...state.colorScheme };
    _state.colorScheme = { ..._light };
  } else {
    state.prevColorSchema = { ...state.colorScheme };
    _state.colorScheme = { ..._dark };
  }

  state = { ..._state };

  return state;
};

const initialState: Theme = {
  themeName: 'light',
  colorScheme: {
    primary: '#57FFBD',
    onPrimary: '#0F0F0F',
    secondary: '#3976CC',
    onSecondary: '#F0E2E7',
    tertiary: '#121014',
    onTertiary: '#DDEEFF',
    surface: '#A7A2A9',
    onSurface: '#303438',
    background: '#FFFFFF',
    warn: '#C17817',
    error: '#B20D30',
  },
  prevColorSchema: undefined
};


const themeReducer = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    SetTheme: (state, action: PayloadAction<Theme>) => {
      if (state.themeName !== action.payload.themeName) {
        state.themeName = action.payload.themeName;
       
        state = { ...setThemeState(action.payload.themeName, state) };
      } 
    }
  }
});

export const { SetTheme } = themeReducer.actions;

export default themeReducer.reducer;
