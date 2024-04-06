import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWarehouse } from 'react-icons/fa';
import greenhouseImage from '../../assets/greenhouse-effect.png';
import './GreenhousesPage.css'; // Import CSS for styling
import axios from "axios";

function NavigationSquare({ to, icon: Icon, label, image, name }) {
    return (
        <div className="navigation-square">
            <Link to={to} className="navigation-link">
                <div className="navigation-image">
                    <img src={image} alt={name} />
                </div>
                <p>{name}</p>
            </Link>
        </div>
    );
}

function GreenhousesPage() {
    const [greenhouses, setGreenHouses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/list-greenhouses/')
            .then(response => {
                setGreenHouses(response.data.greenhouse_houses);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="greenhouses-page">
            <header>
                <h1>My Greenhouses</h1>
            </header>
            <div className="greenhouses-grid">
                {greenhouses.map((greenhouse, index) => (
                    <NavigationSquare
                        key={index}
                        to={`/greenhouse/${greenhouse.id}`}
                        icon={FaWarehouse}
                        label={greenhouse.id}
                        image={greenhouseImage}
                        name={greenhouse.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default GreenhousesPage;