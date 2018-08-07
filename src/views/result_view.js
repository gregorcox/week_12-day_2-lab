const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("SolarSystem:FoundPlanet", (evt) => {
    const planet = evt.detail;
    this.updateView(planet);
  })
};

ResultView.prototype.updateView = function (planet) {
  const planetInfo = document.createElement('div');
  const planetName = document.createElement('p');
  const planetOrbit = document.createElement('p');
  const planetDay = document.createElement('p');
  const planetSurfaceArea = document.createElement('p');
  const planetVolume = document.createElement('p');
  const planetGravity = document.createElement('p');
  const planetMoons = document.createElement('p');
  const planetImage = document.createElement('img');

  planetName.textContent = `Name: ${planet.name}`;
  planetOrbit.textContent = `Orbit: ${planet.orbit}`;
  planetDay.textContent = `Day: ${planet.day}`;
  planetSurfaceArea.textContent = `Surface area: ${planet.surfaceArea}`;
  planetVolume.textContent = `Volume: ${planet.volume}`;
  planetGravity.textContent = `Gravity: ${planet.gravity}`;
  planetMoons.textContent = `Moons: ${planet.moons}`;
  planetImage.setAttribute('src', planet.image);

  planetInfo.appendChild(planetName);
  planetInfo.appendChild(planetOrbit);
  planetInfo.appendChild(planetDay);
  planetInfo.appendChild(planetSurfaceArea);
  planetInfo.appendChild(planetVolume);
  planetInfo.appendChild(planetGravity);
  planetInfo.appendChild(planetMoons);
  planetInfo.appendChild(planetImage);
  this.container.innerHTML = '';
  this.container.appendChild(planetInfo);

};

module.exports = ResultView;
