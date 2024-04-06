import React from 'react';
import './Home.css'; // Ensure to add styles for the YieldSquare and grid layout here
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import YieldSquare from "./YieldSquare"; // Assuming this is in the same directory

function Home() {
    return (
        <>
            <div className="home-container">
                <header>
                    <h1>Welcome to Our Dashboard!</h1>
                </header>
                <div className="yields-grid">
                    <YieldSquare plant="Tomatoes" yield="250kg" />
                    <YieldSquare plant="Potatoes" yield="500kg" />
                    <YieldSquare plant="Carrots" yield="300kg" />
                    <YieldSquare plant="Lettuce" yield="150kg" />
                </div>
            </div>
        </>
    );
}

export default Home;
