// prettier-ignore

function lgDogEq(age) {
    const n = age - 5;
	return Math.round(5.4 * n + 39.2364);
}
// calculates multiplier to multiply age with
function lgDogMultiplier(years) {
	return lgDogEq(years + 1) - lgDogEq(years);
}

export { lgDogEq, lgDogMultiplier };
