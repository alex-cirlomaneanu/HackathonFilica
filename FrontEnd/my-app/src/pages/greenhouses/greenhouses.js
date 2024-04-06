import React, { useState } from 'react';
import { FaTemperatureHigh, FaTint, FaSun, FaRegLightbulb, FaLeaf, FaRulerCombined, FaPowerOff, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { MdLandscape } from 'react-icons/md';
import { GiWateringCan } from 'react-icons/gi';
import './GreenhouseSection.css';
import HarvestModal from "./HarvestModal"; // Ensure this CSS file is properly linked

const GreenhouseSection = ({ harvestRecords, addHarvestRecord }) => {
  const [activeTab, setActiveTab] = useState('controlling');
  const [greenhouseData, setGreenhouseData] = useState([
    { icon: MdLandscape, label: 'ID', value: 'GH2345', hasToggle: false },
    { icon: FaLeaf, label: 'Plant', value: 'Carrots', hasToggle: false },
    { icon: FaRulerCombined, label: 'Area', value: '140 sq.m', hasToggle: false },
    { icon: FaTemperatureHigh, label: 'Temperature', value: '26', hasToggle: true },
    { icon: FaTint, label: 'Humidity', value: '62', hasToggle: true },
    { icon: FaSun, label: 'Light Intensity', value: '820', hasToggle: true },
    { icon: GiWateringCan, label: 'Soil pH', value: '6.6', hasToggle: true },
    { icon: FaRegLightbulb, label: 'Soil Humidity', value: '65', hasToggle: true },
    { icon: FaPowerOff, label: 'Power Consumption', value: '7', hasToggle: false }
  ]);
  const [toggleStates, setToggleStates] = useState(greenhouseData.reduce((acc, item, idx) => ({ ...acc, [idx]: false }), {}));

  const toggle = (idx) => {
    if(greenhouseData[idx].hasToggle) {
      setToggleStates({ ...toggleStates, [idx]: !toggleStates[idx] });
    }
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const handleValueChange = (index, newValue) => {
    const newData = [...greenhouseData];
    newData[index].value = newValue;
    setGreenhouseData(newData);
  };
  const handleHarvestSubmit = (amount) => {
    // Find the plant from greenhouseData
    const plantData = greenhouseData.find(data => data.label === 'Plant');
    if (!plantData) {
      console.error('No plant data available');
      return;
    }
    const plant = plantData.value; // This gets the 'Carrots' value or whichever plant is set.

    // Create a new record with both the plant and amount
    const newRecord = {
      plant,
      amount,
    };

    // Call the addHarvestRecord function with the new record
    addHarvestRecord(newRecord);
  };
  // Function to simulate real-time data variation for the "Monitoring" tab
  const simulateMonitoringData = (value) => {
    // Randomly adjust the value within ±1 range
    const adjustment = Math.random() > 0.5 ? 1 : -1;
    return Number(value) + adjustment;
  };

  return (
      <>
        <h2>Greenhouse Zeta</h2>
        <div className="tabs">
          <button onClick={() => setActiveTab('controlling')}>Controlling</button>
          <button onClick={() => setActiveTab('monitoring')}>Monitoring</button>
        </div>
        <div className="greenhouse-data">
          {greenhouseData.map((data, index) => (
              <div key={index} className="data-square">
                <data.icon size={30} color={data.hasToggle && toggleStates[index] ? "#FF0000" : "#4CAF50"} />
                <div className="data-label-value">
                  <span>{data.label}: </span>
                  {activeTab === 'controlling' ? (
                      data.hasToggle ? (
                          // Allow value modification if the toggle is o
                          <div className="value-adjusters">
                            <button className="value-adjust-button"
                                    onClick={() => handleValueChange(index, Number(data.value) + 1)}>+
                            </button>
                            <span className="value-display">{data.value}</span>
                            <button className="value-adjust-button"
                                    onClick={() => handleValueChange(index, Math.max(0, Number(data.value) - 1))}>-
                            </button>
                          </div>

                      ) : (
                          <span>{data.value}</span>
                      )
                  ) : (
                      // Display simulated real-time data in the "Monitoring" tab
                      <span>{simulateMonitoringData(data.value)}</span>
                  )}
                </div>
                {activeTab === 'controlling' && data.hasToggle && (
                    <button onClick={() => toggle(index)}>
                      {toggleStates[index] ? <FaToggleOn size={24} /> : <FaToggleOff size={24} />}
                    </button>
                )}
              </div>
          ))}
        </div>
        <button className="harvest-button" onClick={() => setModalOpen(true)}>Harvest</button>
        <HarvestModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            onHarvestSubmit={handleHarvestSubmit}
        />
      </>
  );
};

export default GreenhouseSection;
