import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Indian Flag</h1>
      <div className="flag-container">
        <div className="flag">
          <div className="stripe saffron"></div>
          <div className="stripe white">
            <div className="chakra">
              <div className="chakra-wheel">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="spoke" />
                ))}
                <div className="chakra-center"></div>
              </div>
            </div>
          </div>
          <div className="stripe green"></div>
        </div>
      </div>
    </div>
  );
}

export default App;