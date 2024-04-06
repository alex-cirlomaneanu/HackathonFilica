// HarvestModal.js
import React, { useState } from 'react';
import './HarvestModal.css'
const HarvestModal = ({ isOpen, onClose, onHarvestSubmit }) => {
    const [harvestAmount, setHarvestAmount] = useState('');

    if (!isOpen) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onHarvestSubmit(harvestAmount);
        onClose(); // Close modal after submitting
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Input Harvest Amount</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={harvestAmount}
                        onChange={(e) => setHarvestAmount(e.target.value)}
                        placeholder="Harvest amount (kg)"
                        autoFocus
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default HarvestModal;