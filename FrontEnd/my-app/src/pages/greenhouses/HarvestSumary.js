import React from 'react';
import './HarvestSumary.css'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
const HarvestSummary = ({ harvestRecords, addHarvestRecord }) => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const harvestYears = ['2020', '2021', '2022', '2023']; // Assuming 4 years for simplicity

    const prepareChartData = (harvestRecords) => {
        const datasets = [];

        // Aggregate records by plant and then by year
        const aggregatedByPlant = harvestRecords.reduce((acc, { plant, amount }) => {
            acc[plant] = acc[plant] || [];
            acc[plant].push(amount);
            return acc;
        }, {});

        // Prepare datasets for the chart
        Object.entries(aggregatedByPlant).forEach(([plant, amounts]) => {
            const data = [];
            amounts.forEach((amount, index) => {
                data[index] = amount; // Place the amount in the corresponding year's position
            });

            datasets.push({
                label: plant,
                data, // Data for each year
                fill: false,
                backgroundColor: 'randomColor()', // You can define a function to assign colors
                borderColor: 'randomColor()', // Same as above
            });
        });

        return {
            labels: harvestYears,
            datasets,
        };
    };
    const chartData = prepareChartData(harvestRecords);
    const aggregateHarvestData = (records) => {
        const aggregatedData = {};

        records.forEach(record => {
            if (aggregatedData[record.plant]) {
                aggregatedData[record.plant] += Number(record.amount);
            } else {
                aggregatedData[record.plant] = Number(record.amount);
            }
        });

        return aggregatedData;
    };
    const aggregatedData = aggregateHarvestData(harvestRecords);

    return (
        <>
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
            <Line data={chartData} />;
            </>
    );
};

export default HarvestSummary;