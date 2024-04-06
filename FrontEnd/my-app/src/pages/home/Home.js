import React from 'react';
import './Home.css';
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer"; // Fișierul pentru stilizare

function Home() {
  return (
      <>
          <Header />
          <div className="home-container">
              <header>
                <h1>Welcome to Our Page!</h1>
                <p>Discover innovative solutions for farm sustainability using circular economy and ecology.</p>
              </header>
              <section>
                <h2>How Can We Help?</h2>
                <p>Explore our tools to optimize resources, manage waste, and promote sustainable agriculture.</p>
              </section>
              <section>
                <h2>About Us</h2>
                <p>We are a dedicated team developing solutions for farmers who want to contribute to protecting the environment. Read more about our mission and values.</p>
              </section>
          </div>
          <Footer />
      </>

  );
}

export default Home;
