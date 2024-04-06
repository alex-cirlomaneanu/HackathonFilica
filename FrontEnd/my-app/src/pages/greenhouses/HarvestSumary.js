import React from 'react';
import './HarvestSumary.css'
const HarvestSummary = ({ harvestRecords, addHarvestRecord }) => {
    const aggregateHarvestData = (records) => {
        const aggregatedData = {};

        records.forEach(record => {
            if (aggregatedData[record.plant]) {
                aggregatedData[record.plant] += record.amount;
            } else {
                aggregatedData[record.plant] = record.amount;
            }
        });

        return aggregatedData;
    };
    const aggregatedData = aggregateHarvestData(harvestRecords);

    return (
        <div className="harvest-summary-container">
            <h2 className="harvest-summary-title">Harvest Summary</h2>
            <div className="harvest-cards-container">
                {Object.entries(aggregatedData).map(([plant, totalAmount]) => (
                    <div key={plant} className="harvest-card">
                        <div className="harvest-card-content">
                            <span className="plant-name">{plant}</span>
                            <span className="harvest-amount">{totalAmount} kg</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HarvestSummary;