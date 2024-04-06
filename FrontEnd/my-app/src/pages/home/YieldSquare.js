import React from 'react';

function YieldSquare({ plant, yield: yieldAmount }) {
    return (
        <div className="yield-square">
            <h3>{plant}</h3>
            <p>{yieldAmount}</p>
        </div>
    );
}

export default YieldSquare;
