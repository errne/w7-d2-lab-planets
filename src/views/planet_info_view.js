const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function (element) {
  this.element = element;
}

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:planet-selected', (event) => {
    const planet = event.detail;
    this.displayContent(planet);
  });
};
// name: 'Mercury',
// orbit: 87.969,
// day: 58.646,
// surfaceArea: 0.147,
// volume: 0.056,
// gravity: 0.38,
// moons: 0,
// image: 'images/mercury.jpg'

PlanetInfoView.prototype.displayContent = function (planet) {
  this.element.innerHTML = '';

  this.element.background = planet['image'];

  const br = document.createElement('br');
  this.element.appendChild(br);

  const name = document.createElement('h2');
  name.textContent = `${planet.name}`;
  this.element.appendChild(name)

  const list = document.createElement('ul');
  this.element.appendChild(list);

  const data = ['Orbit', planet.orbit,'Day', planet.day,'Surface Area', planet.surfaceArea, 'Volume', planet.volume, 'Gravity', planet.gravity, 'Moons', planet.moons ]
  for (var i = 0; i < data.length; i+=2) {
    const listItem = document.createElement('li');
    listItem.textContent = `${data[i]}: ${data[i+1]}`;
    list.appendChild(listItem);
  }
};

module.exports = PlanetInfoView;
