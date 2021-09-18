//Calculates years and months

function yearsCalc(years) {
	return Math.floor(years / 12);
}

function monthsCalc(months) {
	return months % 12;
}

export { yearsCalc, monthsCalc };
