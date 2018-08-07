const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  const planetMenu = document.querySelectorAll(".planet-menu-item");
  console.log(planetMenu);
  const selectView = new SelectView(planetMenu);
  selectView.bindEvents();
  planetsDataModel.bindEvents();
  const planetDiv = document.querySelector(".planet-details");

  const planetInfoView = new ResultView(planetDiv);
  planetInfoView.bindEvents();





});
