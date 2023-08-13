import { useState, useEffect } from 'react';
import './notification.css';

type NotificationProps = {
  message: string;
  type: string;
  duration: number;
}

export const Notification = ({ message, type, duration }: NotificationProps) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = (): void => {
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