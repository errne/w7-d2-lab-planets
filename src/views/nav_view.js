const PubSub = require('../helpers/pub_sub.js');

const NavView = function (element) {
  this.element = element;
};

NavView.prototype.bindEvents = function () {
  this.element.addEventListener('click', (event) => {
    const clickedPlanet = event.target.id;
    console.log(clickedPlanet);
    PubSub.publish('NavView:planet-clicked', clickedPlanet);
  });
};


module.exports = NavView;
