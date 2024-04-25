//Створити об'єкт country двома способами: літерально та за допомогою функції конструктора
// властивості:
// - name (рядок)
// - population (число)
// - area (число)
// методи покласти в прототип
// - getDensity() - повертає число яке є результатом обчислення популяція поділена на площу

// - getInfo() - повертає рядок з повною інформацією про країну (назва, популяція та площа) з описом що виводить і одиницями вимірювання

const userFunc = {
  getDensity: function () {
    return this.population / this.area;
  },
  getInfo: function () {
    return ` country:${this.name} area:${this.area} км² population:${this.population} осіб `;
  },
};
const country = {
  name: "Ukraine",
  population: 34000000,
  area: 603628,
  __proto__: userFunc,
};
console.log(country);

function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
}
 function userFunc1()  {
  this.getDensity= function () {
    return this.population / this.area;
  };
  this.getInfo= function () {
    return`country:${this.name} area:${this.area} км² population:${this.population} осіб`;
  };
};
Country.prototype = new userFunc1();

const country1 = new Country("Ukraine", 34000000, 603628);

console.log(country1);
