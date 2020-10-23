import React from 'react';

const api = {
  key: "f27a583255ce319d707475582d54fe53",
  base: "https//api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location">Newark NJ USA</div>
<div className="date"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
