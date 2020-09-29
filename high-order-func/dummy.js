//use of some() method
"use strict";
const fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}
console.log(checkAvailability(fruits, 'banana'));

//1.
//use of evrey() method
const isBelowThreshold = (currentValue) => currentValue < 5;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

//or
console.log([1, 30, 39, 29, 10, 13].every((currentValue) => currentValue < 5));


//2.
console.log([12, 5, 8, 130, 44].every(ele => ele > 1));

//FILTER , MAP, REDUCE
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//FILTER - FILTER THINGS FROM ARRAY

let test = companies.filter(names => names.name);
console.log(test);
console.log(ages.filter(age => age < 21));
console.log(companies.filter(company => company.category == "Retail"));
console.log(companies.filter(eighties => (eighties.start > 1980 && eighties.start < 1990)));
console.log(companies.filter(years => ((years.end - years.start) >= 10)));



//MAP- CREATES NEW ARRAYS FROM GIVEN ARRAY
console.log(companies.map(names => `${names.name} (${names.start} - ${names.end})`));
console.log(ages.map(cal => Math.sqrt(cal))
  /              .map(cal => cal * 2));

//SORT - SORTING ARRAY (SAY SORT COMPANIES BY YEAR..EARLIEST TO LATEST)
console.log(companies.sort((a, b) => (a.start > b.start) ? 1 : -1));
console.log(ages.sort((a, b) => a - b));

//REDUCE
console.log(ages.reduce((total, age) => total + age, 0));

//total years for all companies
console.log(companies.reduce((total, company) => total + (company.end - company.start), 0));