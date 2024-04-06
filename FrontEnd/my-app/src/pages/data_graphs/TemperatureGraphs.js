import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TemperatureGraph = ({ temperatureData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy(); // Destroy previous chart instance
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: temperatureData.map(dataPoint => dataPoint.hour),
          datasets: [
            {
              label: 'Temperature (°C)',
              data: temperatureData.map(dataPoint => dataPoint.temperature),
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, [temperatureData]);

  return (
    <div className="rounded-corner-div">
      <canvas ref={chartRef} />
    </div>
  );
};

export default TemperatureGraph;
