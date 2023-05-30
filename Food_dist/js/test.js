"use strict";
/* const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    const obj = {
      name: "qwery",
      age: 12,
    };
    console.log(new Date().toDateString());
    console.log(obj);
    resolve(obj);
    reject();
  }, 2000);
});
pr.then((obj) => {
  obj.sex = "male";
  console.log(obj);
});
pr.catch(() => {
  console.log("here an error");
});
pr.finally(() => {
  console.log("this is a finally block");
}); */
/* const arr = ["ann", "sergey", "tom", "sebastian", "olga"];
const sh = arr.filter((name) => name.length < 5);
console.log(sh); */
/* const mapp = [1, 34, 66, 23, 6, 7, 8, 0, -12, -100, 8, -34, -865];
const arr = ["ann", "sergey", "tom", "sebastian", "olga"];
//console.log(mapp.reduce((x, y) => x + y));
//console.log(arr.reduce((x, y) => `${x}. ${y}`));
const ob = {
  1: "human",
  2: "human",
  3: "pet",
  4: "pet",
  5: "animal",
  6: "vampire",
}; */
/* console.log(
  Object.entries(ob)
    .filter((x) => x[1] === "human")
    .map((x) => x[0])
); */
/* const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((x) => x.rating >= 8);
}

function showListOfFilms(arr) {
  return arr.map((x) => x.name).reduce((y, f) => `${y}, ${f}`);
}

function setFilmsIds(arr) {
  return arr.map((film, i) => {
    film.id = i;
    return film;
  });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every((film) => (film.id != undefined) & (film.id != 0));
}

console.log(checkFilms(films)); */
/* const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data.filter((x) => x.amount > 0).reduce((x, y) => x + y.amount, 0);
};

const getTotalIncomeAmount = (data) => {
  return data.some((x) => x.amount < 0)
    ? data.reduce((x, y) => x + y.amount, 0)
    : getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds)); */
/* localStorage.setItem("name", "Alla");
localStorage.setItem("num", 34);
const ans = prompt("put in your name");
console.log(ans.match(/a/g));
console.log("12-45ASD-67".replace(/\D/g, "*")); */
/* class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  #y = 22;
  get uage() {
    return this.age;
  }
  getName() {
    return this.name;
  }
  getSex() {
    return this.sex;
  }
  setSex(sex) {
    this.sex = sex;
  }
  set uage(age) {
    this.age = age;
  }
  get Y() {
    return this.#y;
  }
  set Y(y) {
    this.#y = y;
  }
  say() {
    console.log(this.age + " " + this.name + " " + this.#y);
  }
}
const user = new User("n", 10, "male");
console.log(user.uage);
user.uage = 99;
console.log(user.uage);
console.log("********************");
console.log(user.Y);
user.Y = 1000;
console.log(user.Y);
user.say(); */
const x = "nameAAA";
(function () {
  //console.log(x);
})();
/* const points = [40, 100, 1, 5, 25, 10];
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const arr = [...q1, ...q2, ...points, ...q3, ...q4];
console.log(arr);
console.log(Math.trunc(Math.random() * 100));
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car.h);
document.getElementById("demo").innerHTML = car?.name; */
/* const maps = new Map([
  ["1", 1],
  ["2", 2],
  ["3", 3],
]);
const sets = new Set(["11", "22", "33", "11"]);
console.log(maps);
console.log(sets);
console.log(sets.values()); */
console.log("4" + 3);
