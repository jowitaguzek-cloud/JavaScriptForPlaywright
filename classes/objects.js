const car1 = {
  brand: "KIA",
  model: "Ceed",
  year: 2019
}

const car2 = {
  brand: "Ford",
  model: "Puma",
  year: 2022
}

const car3 = {
  brand: "BMW",
  model: "X5",
  year: 2021
}

const cars = [car1, car2, car3];

cars.map(car => {
  console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
});

// Samochody nowsze niż 2020
const newCars = cars.filter(car => car.year > 2020);

console.log(newCars);