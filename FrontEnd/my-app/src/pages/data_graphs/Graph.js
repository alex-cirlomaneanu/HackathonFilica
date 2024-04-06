import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ datasets }) => {
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
          labels: datasets[0].data.map(dataPoint => dataPoint.hour || dataPoint.date),
          datasets: datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data.map(dataPoint => dataPoint.value),
            borderColor: dataset.color,
            tension: 0.1,
          })),
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
  }, [datasets]);

  return (
    <div className="rounded-corner-div">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Graph;
