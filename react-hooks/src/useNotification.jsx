import React from 'react';

const useNotification = (title, options) => {
  if (!('Notification' in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification('You are good developer', {
    body: 'run and run',
  });
  return (
    <div style={{ height: '1000vh' }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
