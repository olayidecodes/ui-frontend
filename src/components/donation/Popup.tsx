// Popup.tsx

import React from 'react';
import AllLisThermo from "./AllThermo";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <AllLisThermo/>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
