import React, {useEffect, useState} from 'react';
import { FaTemperatureHigh, FaTint, FaSun, FaRegLightbulb, FaLeaf, FaRulerCombined, FaPowerOff, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { MdLandscape } from 'react-icons/md';
import { GiWateringCan } from 'react-icons/gi';
import './GreenhouseSection.css';
import HarvestModal from "./HarvestModal";
import axios from "axios";
import {useParams} from "react-router-dom"; // Ensure this CSS file is properly linked

const GreenhouseSection = ({ harvestRecords, addHarvestRecord }) => {
  const [activeTab, setActiveTab] = useState('controlling');

  const [greenHouseInformation, setGreenHouseInformation] = useState({});
  const [greenhouseData, setGreenhouseData] = useState([]);
  let {g_id} = useParams();

  useEffect(() => {
      axios.get(`http://localhost:8000/api/greenhouse/${g_id}`)
          .then(response => {
              setGreenHouseInformation(response.data.greenhouse_info);
              // Update greenhouseData based on fetched information
              setGreenhouseData([
                  { icon: MdLandscape, label: 'ID', value: response.data.greenhouse_info.id, hasToggle: false },
                  { icon: FaLeaf, label: 'Plant', value: response.data.greenhouse_info.plant, hasToggle: false },
                  { icon: FaRulerCombined, label: 'Area', value: `${response.data.greenhouse_info.area} sq.m`, hasToggle: false },
                  { icon: FaTemperatureHigh, label: 'Temperature', value: `${response.data.greenhouse_info.temperature}` , hasToggle: true },
                  { icon: FaTint, label: 'Humidity', value: `${response.data.greenhouse_info.humidity}`, hasToggle: true },
                  { icon: FaSun, label: 'Light Intensity', value: `${response.data.greenhouse_info.light_intensity}`, hasToggle: true },
                  { icon: GiWateringCan, label: 'Soil pH', value: `${response.data.greenhouse_info.soil_ph}`, hasToggle: true },
                  { icon: FaRegLightbulb, label: 'Soil Humidity', value: `${response.data.greenhouse_info.soil_humidity}`, hasToggle: true },
                  { icon: FaPowerOff, label: 'Power Consumption', value: `${response.data.greenhouse_info.power_consumption}`, hasToggle: false }
              ]);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);
  console.log(greenHouseInformation.name)
  console.log(greenHouseInformation.id)
  console.log(greenHouseInformation)
  console.log(typeof greenHouseInformation)
  // console.log(JSON.stringify(greenHouseInformation))

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
        <h2>{greenHouseInformation.name}</h2>
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