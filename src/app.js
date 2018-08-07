const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  const planetMenu = document.querySelectorAll(".planet-menu-item");
  console.log(planetMenu);
  const selectView = new SelectView(planetMenu);
  selectView.bindEvents();
  planetsDataModel.bindEvents();




});
