const PlanetInfoView = require('./views/planet_info_view.js');
const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavView = require('./views/nav_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  let element = document.querySelector('.planets-menu');
  const navView = new NavView(element);
  navView.bindEvents();

  let container = document.querySelector('.planet-details');
  const planetInfoView = new PlanetInfoView(container);
  planetInfoView.bindEvents();

});
