import { RootComponent } from 'views/layouts/components';

import { ThemeProvider } from 'context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <RootComponent />
    </ThemeProvider>
  );
}

export default App;
