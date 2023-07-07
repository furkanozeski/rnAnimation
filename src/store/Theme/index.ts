import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    SetTheme: (state, action: PayloadAction<string>) => {
      state.themeName = action.payload;
      
      if (action.payload === 'light') {
        state.prevColorSchema = { ...state.colorScheme };
        state.colorScheme = { ..._light };
      } else {
        state.prevColorSchema = { ...state.colorScheme };
        state.colorScheme = { ..._dark };
      }
    }
  }
});

export const { SetTheme } = themeReducer.actions;

export default themeReducer.reducer;
