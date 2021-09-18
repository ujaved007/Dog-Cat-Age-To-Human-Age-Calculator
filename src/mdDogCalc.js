import { mdDogEq, mdDogMultiplier } from "./mdDogEquation.js";
import { yearsCalc, monthsCalc } from "./yearsMonthsCalc.js";

function mdDogCalculator(years, months) {
	const monthsValue = Number(months.value);
	if (years === 5 && monthsValue) {
		const age = monthsValue * 6;
		return `${36 + yearsCalc(age)} years ${
			monthsCalc(age) ? `and ${monthsCalc(age)} months` : ""
		} old`;
	} else if (years > 5 && monthsValue) {
		const age = monthsValue * mdDogMultiplier(years);
		return `${mdDogEq(years) + yearsCalc(age)} years ${
			monthsCalc(age) ? `and ${monthsCalc(age)} months` : ""
		} old`;
	}
}

export { mdDogCalculator };
