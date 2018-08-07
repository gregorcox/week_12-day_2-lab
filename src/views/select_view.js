const PubSub = require('../helpers/pub_sub.js');


const SelectView = function (element){
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  this.element.forEach((planet, index) => {
    planet.addEventListener("click", (evt)=>{

      const selectedPlanet = evt.target.id;
     console.log(selectedPlanet);
      PubSub.publish('SelectView:selectedPlanet', selectedPlanet)
    })
  })

}



module.exports = SelectView;
