import React from 'react';
import Home from './pages/Home';
import { Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
