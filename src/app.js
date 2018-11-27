const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavView = require('./views/nav_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  let element = document.querySelector('.planets-menu');
  const navView = new NavView(element);
  navView.bindEvents();

});
