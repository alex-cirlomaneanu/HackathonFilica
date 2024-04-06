import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text">Green Harvest</h1>
                    <h4>
                        Harvesting Sustainability, Cultivating Tomorrow.
                    </h4>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; 0740 123 456</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; </span>
                    </div>
                    <div className="socials">
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <br/>
                    <ul>
                        <a href="src/components/layout/footer#"><li>Events</li></a>
                        <a href="src/components/layout/footer#"><li>Termes & conditions</li></a>
                        <a href="/about"><li>About us</li></a>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact us</h2>
                    <br/>
                    <form action="index.html" method="post">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your e-mail address..."/>
                        <textarea rows="4" name="message" className="text-input contact-input" placeholder="Write a message..."></textarea>
                        <button type="submit" className="btn btn-big contact-btn">
                            <i className="fas fa-envelope"></i>
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; GreenHarvest.com | Designed by Filica Instaltoru
            </div>
        </div>
  );
}

export default Footer;
