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
const catAgeField = document.getElementById("cat-age");
const dogAgeField = document.getElementById("dog-age");

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

catAgeField.addEventListener("click", () => {
	catResult.textContent = "";
});

//cat calculator

catAgeCalcBtn.addEventListener("click", () => {
	const catAgeFieldValue = Number(catAgeField.value);
	if (!Number.isInteger(catAgeFieldValue) || catAgeFieldValue <= 0) {
		return (catResult.textContent =
			"Please enter a valid number greater than zero without decimals");
	} else {
		if (catAgeFieldValue <= 2 && catAgeFieldValue > 0) {
			if (catAgeFieldValue === 1) {
				return (catResult.textContent = "Your cat is 15 years old");
			} else return (catResult.textContent = "Your cat is 24 years old");
		} else if (catAgeFieldValue > 2) {
			return (catResult.textContent = `Your cat is ${
				24 + (catAgeFieldValue - 2) * 4
			} years old`);
		}
	}
});

//DOGCALCULATOR

function dogError() {
	return (dogResult.textContent =
		"Please enter a valid number greater than zero without decimals");
}

function dogAgeUntilTwo(age) {
	if (age === 1) {
		return (dogResult.textContent = "Your dog is 15 years old");
	} else if (age === 2)
		return (dogResult.textContent = "Your dog is 24 years old");
	else
		return (dogResult.textContent =
			"Please enter a valid number greater than zero");
}

function smBreed(age) {
	if (!Number.isInteger(age) || age <= 0) {
		return dogError();
	} else {
		if (age <= 2) {
			return dogAgeUntilTwo(age);
		} else {
			return (dogResult.textContent = `Your dog is ${
				24 + (age - 2) * 4
			} years old`);
		}
	}
}

function medBreed(age) {
	if (!Number.isInteger(age) || age <= 0) {
		return dogError();
	} else {
		if (age <= 2) {
			return dogAgeUntilTwo(age);
		} else if (age > 2 && age <= 5) {
			return (dogResult.textContent = `Your dog is ${
				24 + (age - 2) * 4
			} years old`);
		} else if (age > 5) {
			if (age % 2 !== 0) {
				return (dogResult.textContent = `Your dog is ${
					38 + (Math.floor(age / 2) - 2) * 9
				} years old`);
			} else {
				return (dogResult.textContent = `Your dog is ${
					42 + (age / 2 - 3) * 9
				} years old`);
			}
		}
	}
}
function lgeBreed(age) {
	if (!Number.isInteger(age) || age <= 0) {
		return dogError();
	} else {
		if (age <= 2) {
			return dogAgeUntilTwo(age);
		} else if (age > 2 && age <= 5) {
			return (dogResult.textContent = `Your dog is ${
				24 + (age - 2) * 4
			} years old`);
		} else if (age > 5 && age <= 8) {
			return (dogResult.textContent = `Your dog is ${
				45 + (age - 6) * 5
			} years old`);
		} else if (age > 8 && age <= 12) {
			if (age % 2 !== 0) {
				return (dogResult.textContent = `Your dog is ${
					61 + (Math.floor(age / 2) - 4) * 11
				} years old`);
			} else {
				return (dogResult.textContent = `Your dog is ${
					66 + (age / 2 - 5) * 11
				} years old`);
			}
		} else if (age >= 13) {
			if (age % 2 !== 0) {
				return (dogResult.textContent = `Your dog is ${
					82 + (Math.floor(age / 2) - 6) * 11
				} years old`);
			} else {
				return (dogResult.textContent = `Your dog is ${
					88 + (age / 2 - 7) * 11
				} years old`);
			}
		}
	}
}
// toggle results DOGS

dogAgeField.addEventListener("click", () => {
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
	const dogAgeFieldValue = Number(dogAgeField.value);
	if (smallBreedBtn.classList.contains("selected-btn")) {
		smBreed(dogAgeFieldValue);
	} else {
		if (mediumBreedBtn.classList.contains("selected-btn")) {
			medBreed(dogAgeFieldValue);
		} else lgeBreed(dogAgeFieldValue);
	}
});
