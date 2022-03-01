import React, { useEffect, useState } from 'react';

const App = () => {
  const sayHello = () => console.log('hello');
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]); // number가 바뀔때마다 실행. []이면 처음렌더링 때만 실행.
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
