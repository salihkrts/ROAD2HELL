import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ onConfirm, onCancel, t }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-window flicker">
        <h2 className="modal-title">{t('exit_confirm')}</h2>
        <p className="modal-text">{t('exit_text')}</p>
        
        <div className="modal-options">
          <button className="modal-btn confirm-btn" onClick={onConfirm}>
            {t('leave_gate')}
          </button>
          <button className="modal-btn cancel-btn" onClick={onCancel}>
            {t('stay_gate')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
