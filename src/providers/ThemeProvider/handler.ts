import { THEME_LOCAL_KEY } from '@src/constants/Theme';
import Theme from '@src/types/Theme/themeStore';
import { localStorage } from '@src/data/LocalStorage';

export const getTheme = () => localStorage.getString(THEME_LOCAL_KEY);

const setThemeToLocaleStorage = (key: string, theme: Theme) => { localStorage.set(key, JSON.stringify(theme)); };


export default function setTheme(key: string, theme: Theme) {
  let isSet = false;
  try {
    setThemeToLocaleStorage(key, theme);
    isSet = true;
  } catch (error) {
    isSet = false;
  }

  return isSet;
}
