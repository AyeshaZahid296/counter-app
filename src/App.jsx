import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const updateCounter = (action) => {
    if (action === 'decrease' && count > 0) {
      setCount(count - 1);
    } else if (action === 'reset') {
      setCount(0);
    } else if (action === 'increase' && count < 20) {
      setCount(count + 1);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-[url('./blue-sky-clouds.png')]">
      <div className="text-center bg-yellow-100 p-8 rounded-xl shadow-xl max-w-xs w-full">
        <h1 className="text-3xl text-pink-500 font-semibold mb-4">Counter App</h1>
        <p
          id="counter-value"
          className={`text-5xl font-bold ${count !== 0 ? 'transform scale-110' : ''} text-orange-400 transition-all mb-6`}
        >
          {count}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            className="bg-pink-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-pink-600 focus:outline-none w-16 h-16"
            onClick={() => updateCounter('decrease')}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <button
            className="bg-yellow-400 text-red-800 p-3 rounded-full flex items-center justify-center hover:bg-yellow-500 focus:outline-none w-16 h-16"
            onClick={() => updateCounter('reset')}
          >
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
          <button
            className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-green-600 focus:outline-none w-16 h-16"
            onClick={() => updateCounter('increase')}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
