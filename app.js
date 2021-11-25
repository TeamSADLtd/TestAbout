require('dotenv').config();

console.log(`env = ${debug(process.env)}`);
console.log(`API_KEY = ${debug(process.env.API_KEY)}`);

// ! МЕТОДЫ ***************************************************************************************
// содержимое объекта ***************************
function debug(obj = {}) {
	return JSON.stringify(obj, null, 2);
}