import React, { Component } from 'react';

class Sample extends Component {
  render() {
    return (
      <div className="home-banner">
        <div className="home-banner-img">
          <img src="h1_hero.png" alt="" style={{ width: '1580px', height: '748px', objectFit: 'cover', objectPosition: '0% 50%' }} fetchpriority="high" />
        </div>
        <div className="home-banner-content">
          <h1>Healthcare for Good Today. Tomorrow. Always</h1>
          <form className="autocomplete-search-form" data-drupal-selector="autocomplete-search-form" action="/search" method="post" id="autocomplete-search-form" acceptCharset="UTF-8">
            {/* Rest of the form content */}
          </form>
        </div>
      </div>
    );
  }
}

export default Sample;
