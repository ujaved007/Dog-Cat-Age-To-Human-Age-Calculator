const catYears = document.getElementById("cat-age");
const dogYears = document.getElementById("dog-age");
const catMonths = document.getElementById("cat-months");
const dogMonths = document.getElementById("dog-months");

function firstTwoYears(years, months) {
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

export { firstTwoYears };
