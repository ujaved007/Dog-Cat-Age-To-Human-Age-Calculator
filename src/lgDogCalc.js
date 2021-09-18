import { lgDogEq, lgDogMultiplier } from "./lgDogEquation.js";
import { yearsCalc, monthsCalc } from "./yearsMonthsCalc.js";

function lgDogCalculator(years, months) {
	const monthsValue = Number(months.value);
	if (years === 5 && monthsValue) {
		const age = monthsValue * 9;
		return `${36 + yearsCalc(age)} years ${
			monthsCalc(age) ? `and ${monthsCalc(age)} months` : ""
		} old`;
	} else if (years > 5 && monthsValue) {
		const age = monthsValue * lgDogMultiplier(years);
		return `${lgDogEq(years) + yearsCalc(age)} years ${
			monthsCalc(age) ? `and ${monthsCalc(age)} months` : ""
		} old`;
	}
}

export { lgDogCalculator };
