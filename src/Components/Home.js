import React, { useEffect } from 'react';
import h1_hero_png from '../Components/h1_hero.png'; // Import the image
import d7_jpg from '../Components/d7.jpg'; // Import the additional image
import d9_jpg from '../Components/d9.jpg'; // Import the additional image
import Navigation from './Navigation'; // Import the Navigation component
import './Home.css'; // Import the CSS file

export default function Home() {
  useEffect(() => {
    // Initialize the carousel on component mount
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      new window.bootstrap.Carousel(carousel);
    }
  }, []);

  return (
    <div>
      <Navigation /> {/* Include the Navigation component */}
      <div className="carousel-container">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={h1_hero_png} className="d-block w-100" alt="Image 1" />
            </div>
            <div className="carousel-item">
              <img src={d7_jpg} className="d-block w-100" alt="Image 2" />
            </div>
            <div className="carousel-item">
              <img src={d9_jpg} className="d-block w-100" alt="Image 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
