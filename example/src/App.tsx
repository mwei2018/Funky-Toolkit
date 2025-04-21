import React from 'react';
import { UserProfile } from './components/UserProfile';
import { ThemeProvider } from '@funky/theme';

export function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <header>
          <h1>Example App</h1>
        </header>
        <main>
          <UserProfile />
        </main>
      </div>
    </ThemeProvider>
  );
} 