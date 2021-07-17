import React from 'react';
import axios from 'axios';
import './App.css';

// import components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
        <Feeling />
        <Understanding />
        <Support />
        <Comments />
      </main>
    </div>
  );
}

export default App;
