import React from 'react';

import Items from './Items.js';

const App = function() {
  return (
    <div className="App">
      <Items items={["a", "b", "c"]} />
    </div>
  );
}

export default App;
