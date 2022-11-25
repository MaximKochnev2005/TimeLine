import React, {FC} from 'react';
import './app.scss';
import {Home} from "./home/Home"

const App = ():JSX.Element => {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
