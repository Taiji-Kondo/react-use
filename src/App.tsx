import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {Note} from "./features/note/Note";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React use RFC Example
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Note id={1} shouldIncludeAuthor={true} />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
