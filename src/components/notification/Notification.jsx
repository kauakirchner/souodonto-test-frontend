import { useState, useEffect } from 'react';
import './notification.css';

export const Notification = ({ message, type, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className={`notification ${type}`}>
          <span className="message">{message}</span>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
        </div>
      )}
    </>
  );
};