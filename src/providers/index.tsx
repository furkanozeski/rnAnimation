import React from 'react';
import NavigationGraph from '@routers/index';
import ApplicationProvider from './AppProvider/ApplicationProvider';
import ThemeProvider from './ThemeProvider/ThemeProvider';

export default function CustomAppProvider() {
  return (
    <ApplicationProvider>
      <ThemeProvider>
        <NavigationGraph />
      </ThemeProvider>
    </ApplicationProvider>
  );
}
