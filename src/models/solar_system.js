const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('NavView:planet-clicked', (event) => {
    const clickedPlanetId = event.detail;
    this.publishPlanetDetail(clickedPlanetId);
  });
};

SolarSystem.prototype.publishPlanetDetail = function (clickedPlanetId) {
  const selectedPlanet = this.planets.find((planet) => {
    return planet.name === clickedPlanetId;
  });
  PubSub.publish('SolarSystem:planet-selected', selectedPlanet);
};


module.exports = SolarSystem;
