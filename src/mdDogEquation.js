// prettier-ignore
function mdDogEq(age) {
	const n = age - 5;
	return (1 / 4) * ((18 * n) + ((-1) ** n) + 151);
}
// calculates multiplier to multiply age with
function mdDogMultiplier(years) {
	return mdDogEq(years + 1) - mdDogEq(years);
}

export { mdDogEq, mdDogMultiplier };
