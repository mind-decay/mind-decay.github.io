import React from 'react';

import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { RootComponent } from 'views/layouts/components';

function App() {
  return (
    <ThemeProvider>
      <RootComponent />
    </ThemeProvider>
  );
}

export default App;
