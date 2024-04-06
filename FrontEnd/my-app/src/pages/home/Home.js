import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaWarehouse, FaTachometerAlt, FaSeedling, FaChartLine } from 'react-icons/fa'; // Import icons

function NavigationSquare({ to, icon: Icon, label }) {
    return (
        <div className="navigation-square">
            <Link to={to} className="navigation-link">
                <Icon size={48} /> {/* Adjust icon size as needed */}
                <p>{label}</p>
            </Link>
        </div>
    );
}

function Home() {
    return (
        <div className="home-container">
            <header>
                <h1>Welcome to Our Dashboard!</h1>
            </header>
            <div className="yields-grid">
                <NavigationSquare to="/list-greenhouses" icon={FaWarehouse} label="My Greenhouses" />
                <NavigationSquare to="/my-sensors" icon={FaTachometerAlt} label="My Sensors" />
                <NavigationSquare to="/my-production" icon={FaSeedling} label="My Production" />
                <NavigationSquare to="/general-statistics" icon={FaChartLine} label="General Statistics" />
            </div>
        </div>
    );
}

export default Home;
