import React, { useState } from 'react';
import data from 'Others/data.json';
import { Link } from 'react-router-dom';

const App = () => {
  const [showList, setShowList] = useState(false);
  const handleclick = () => {
    setShowList(!showList);
    console.log('cambio showList', showList);
  };

  return (
    <React.Fragment>
      <Link to="/img">
        <h3>To img --- "react-router"</h3>
      </Link>
      <a href="/img">
        <h3>To img --- "href"</h3>
      </a>
      <button type="button" onClick={handleclick}>
        Show Loaders
      </button>
      {showList && data.loaders.map(elemento => <div>{elemento.name}</div>)}
    </React.Fragment>
  );
};

export default App;
