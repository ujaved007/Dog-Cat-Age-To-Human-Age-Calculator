// cats and small dogs have identical age progressions throughout their life. So will use catCalculator in dog small breed calculations as well.
// cats and all dogs have identical age progression until 5years old. So will use catCalculator() in those calculations too.

function catCalculator(years, months) {
	const monthsValue = Number(months.value);
	if (years === 0 && monthsValue) {
		const age = monthsValue * 15;
		return `${yearsCalc(age)} years ${
			monthsCalc(age) ? `and ${monthsCalc(age)} months` : ""
		} old`;
	} else if (years === 1 && monthsValue) {
		const age = monthsValue * 9;
		return `${15 + yearsCalc(age)} years ${
			monthsCalc(age) ? `and ${monthsCalc(age)} months` : ""
		} old`;
	} else if (years === 2 && monthsValue) {
		const age = monthsValue * 4;
		return `${24 + yearsCalc(age)} years ${
			monthsCalc(age) ? `and ${monthsCalc(age)} months` : ""
		} old`;
	} else if (years > 2 && monthsValue) {
		const age = monthsValue * 4;
		return `${yearsCalc(age) + 24 + (years - 2) * 4} years ${
			monthsCalc(age) ? `and ${monthsCalc(age)} months` : ""
		} old`;
	}
}

function yearsCalc(years) {
	return Math.floor(years / 12);
}
function monthsCalc(months) {
	return months % 12;
}

export { catCalculator };
