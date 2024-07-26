import React, { useState } from 'react';
import './App.css';

function App() {
  const [notifications, setNotifications] = useState([]);

  const sendNotification = () => {
    // Logic to send a notification
    const newNotification = {
      id: notifications.length,
      message: `Notification #${notifications.length + 1}`,
    };
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SuprSend Notification Demo</h1>
        <button onClick={sendNotification}>Send Notification</button>
        <div className="notifications">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification">
              {notification.message}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
