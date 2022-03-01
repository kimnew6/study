import React, { useEffect } from 'react';

const useBeforeLeave = onBefore => {
  useEffect(() => {
    if (typeof onBefore !== 'function') {
      return;
    }
    const handle = event => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    };
    document.addEventListener('mouseleave', handle); // mouse를 움직일 때 발생하는 이벤트로 변경 가능
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
};
const App = () => {
  const begForLife = () => console.log("Please don't leave");
  useBeforeLeave(begForLife);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
