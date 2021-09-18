const form = document.getElementById("calc-form");
const dogCalc = document.querySelector(".dog-calc");
const catCalc = document.querySelector(".cat-calc");
const dogBtn = document.querySelector("#dog-btn");
const catBtn = document.querySelector("#cat-btn");
const catAgeCalcBtn = document.querySelector(".calc-cat-age");
const catResult = document.getElementById("cat-result");
const dogAgeCalcBtn = document.querySelector(".calc-dog-age");
const dogResult = document.getElementById("dog-result");
const smallBreedBtn = document.getElementById("sm-breed");
const mediumBreedBtn = document.getElementById("med-breed");
const largeBreedBtn = document.getElementById("large-breed");
const catYears = document.getElementById("cat-age");
const dogYears = document.getElementById("dog-age");
const catMonths = document.getElementById("cat-months");
const dogMonths = document.getElementById("dog-months");
import { catCalculator } from "./src/catCalc.js";
import { mdDogEq } from "./src/mdDogEquation.js";
import { lgDogEq } from "./src/lgDogEquation.js";
import { mdDogCalculator } from "./src/mdDogCalc.js";
import { lgDogCalculator } from "./src/lgDogCalc.js";
//default calculator on-load

window.addEventListener("DOMContentLoaded", () => {
	catCalc.classList.add("hide-section");
	dogBtn.classList.add("selected-btn");
	smallBreedBtn.classList.add("selected-btn");
});

//toggle calculators

catBtn.addEventListener("click", () => {
	if (catCalc.classList.contains("hide-section")) {
		catCalc.classList.remove("hide-section");
		catBtn.classList.add("selected-btn");
		dogBtn.classList.remove("selected-btn");
		dogCalc.classList.add("hide-section");
	} else dogCalc.classList.add("hide-section");
});
dogBtn.addEventListener("click", () => {
	if (dogCalc.classList.contains("hide-section")) {
		dogCalc.classList.remove("hide-section");
		dogBtn.classList.add("selected-btn");
		catBtn.classList.remove("selected-btn");
		catCalc.classList.add("hide-section");
	} else catCalc.classList.add("hide-section");
});

// toggle results CATS

catYears.addEventListener("click", () => {
	catResult.textContent = "";
});

//cat calculator

catAgeCalcBtn.addEventListener("click", () => {
	const catYearsValue = Number(catYears.value);
	const catMonthsValue = Number(catMonths.value);
	if (
		!Number.isInteger(catYearsValue) ||
		catYearsValue < 0 ||
		!Number.isInteger(catMonthsValue) ||
		catMonthsValue > 12 ||
		catMonthsValue < 0
	) {
		return (catResult.textContent =
			"Please enter a valid number within range and without decimals");
	} else {
		if (catYearsValue <= 2 && catYearsValue >= 0) {
			if (catYearsValue === 0) {
				return (catResult.textContent = `${
					catCalculator(catYearsValue, catMonths)
						? `Your cat is ${catCalculator(catYearsValue, catMonths)}`
						: "Please enter value greater than 1"
				}`);
			} else if (catYearsValue === 1) {
				return (catResult.textContent = `Your cat is ${
					catCalculator(catYearsValue, catMonths)
						? catCalculator(catYearsValue, catMonths)
						: "15 years old"
				}`);
			} else
				return (catResult.textContent = `Your cat is ${
					catCalculator(catYearsValue, catMonths)
						? catCalculator(catYearsValue, catMonths)
						: "24 years old"
				}`);
		} else if (catYearsValue > 2) {
			return (catResult.textContent = `Your cat is ${
				catCalculator(catYearsValue, catMonths)
					? catCalculator(catYearsValue, catMonths)
					: `${24 + (catYearsValue - 2) * 4} years old`
			}`);
		}
	}
});

//DOGCALCULATOR

function dogError() {
	return (dogResult.textContent =
		"Please enter a valid number within range and without decimals");
}

function dogAgeUntilFive(age) {
	if (age === 0) {
		return (dogResult.textContent = `${
			catCalculator(age, dogMonths)
				? `Your dog is ${catCalculator(age, dogMonths)}`
				: "Please enter value greater than 1"
		}`);
	} else if (age === 1) {
		return (dogResult.textContent = `Your dog is ${
			catCalculator(age, dogMonths)
				? catCalculator(age, dogMonths)
				: "15 years old"
		}`);
	} else if (age === 2)
		return (dogResult.textContent = `Your dog is ${
			catCalculator(age, dogMonths)
				? catCalculator(age, dogMonths)
				: "24 years old"
		}`);
	else if (age > 2 && age <= 5) {
		return (dogResult.textContent = `Your dog is ${
			catCalculator(age, dogMonths)
				? catCalculator(age, dogMonths)
				: `${24 + (age - 2) * 4} years old`
		}`);
	} else
		return (dogResult.textContent =
			"Please enter a valid number greater than zero");
}

function smBreed(age) {
	const dogMonthsValue = Number(dogMonths.value);
	if (
		!Number.isInteger(age) ||
		age < 0 ||
		!Number.isInteger(dogMonthsValue) ||
		dogMonthsValue > 12 ||
		dogMonthsValue < 0
	) {
		return dogError();
	} else {
		if (age <= 2) {
			return dogAgeUntilFive(age);
		} else {
			return (dogResult.textContent = `Your dog is ${
				catCalculator(age, dogMonths)
					? catCalculator(age, dogMonths)
					: `${24 + (age - 2) * 4} years old`
			}`);
		}
	}
}

function medBreed(age) {
	const dogMonthsValue = Number(dogMonths.value);
	if (
		!Number.isInteger(age) ||
		age < 0 ||
		!Number.isInteger(dogMonthsValue) ||
		dogMonthsValue > 12 ||
		dogMonthsValue < 0
	) {
		return dogError();
	} else {
		if (age >= 0 && age < 5) {
			return dogAgeUntilFive(age);
		} else if (age === 5) {
			return (dogResult.textContent = `Your dog is ${
				mdDogCalculator(age, dogMonths)
					? mdDogCalculator(age, dogMonths)
					: `36 years old`
			} `);
		} else if (age >= 5) {
			return (dogResult.textContent = `Your dog is ${
				mdDogCalculator(age, dogMonths)
					? mdDogCalculator(age, dogMonths)
					: `${mdDogEq(age)} years old`
			} `);
		}
	}
}
function lgeBreed(age) {
	const dogMonthsValue = Number(dogMonths.value);
	if (
		!Number.isInteger(age) ||
		age < 0 ||
		!Number.isInteger(dogMonthsValue) ||
		dogMonthsValue > 12 ||
		dogMonthsValue < 0
	) {
		return dogError();
	} else {
		if (age >= 0 && age < 5) {
			return dogAgeUntilFive(age);
		} else if (age === 5) {
			return (dogResult.textContent = `Your dog is ${
				lgDogCalculator(age, dogMonths)
					? lgDogCalculator(age, dogMonths)
					: `36 years old`
			} `);
		} else if (age >= 5) {
			return (dogResult.textContent = `Your dog is ${
				lgDogCalculator(age, dogMonths)
					? lgDogCalculator(age, dogMonths)
					: `${lgDogEq(age)} years old`
			} `);
		}
	}
}
// toggle results DOGS

dogYears.addEventListener("click", () => {
	dogResult.textContent = "";
});

//dog calculator toggle selections

smallBreedBtn.addEventListener("click", () => {
	smallBreedBtn.classList.add("selected-btn");
	mediumBreedBtn.classList.remove("selected-btn");
	largeBreedBtn.classList.remove("selected-btn");
	dogResult.textContent = "";
});
mediumBreedBtn.addEventListener("click", () => {
	mediumBreedBtn.classList.add("selected-btn");
	smallBreedBtn.classList.remove("selected-btn");
	largeBreedBtn.classList.remove("selected-btn");
	dogResult.textContent = "";
});
largeBreedBtn.addEventListener("click", () => {
	largeBreedBtn.classList.add("selected-btn");
	mediumBreedBtn.classList.remove("selected-btn");
	smallBreedBtn.classList.remove("selected-btn");
	dogResult.textContent = "";
});

dogAgeCalcBtn.addEventListener("click", () => {
	const dogYearsValue = Number(dogYears.value);
	if (smallBreedBtn.classList.contains("selected-btn")) {
		smBreed(dogYearsValue);
	} else {
		if (mediumBreedBtn.classList.contains("selected-btn")) {
			medBreed(dogYearsValue);
		} else lgeBreed(dogYearsValue);
	}
});
