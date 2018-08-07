const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) => {
  this.container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("SolarSystem:FoundPlanet", (evt) => {
    const planet = evt.detail;
    this.updateView(planet);
  })
};

ResultView.prototype.updateView = function (planet) {
  const planetInfo = document.createElement('p');
  planetInfo.textContent = `Name: ${planet.name}`;
  this.container.innerHTML = '';
  this.container.appendChild(planetInfo);

};

module.exports = ResultView;
