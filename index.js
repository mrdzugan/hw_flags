/**
 * Task #1
 *
 * Дан массив, нужно проверить, есть ли в нем элемент со значением 'c' или нет.
 * Если есть - вывести 'есть', если нет - вывести 'нет'.
 */

let flag = false;

const arr = [1, 2, 3, 'a', 'b', 'c'];

for (const item of arr) {
	if (item === 'c') {
		flag = true;
		break;
	}
}

console.log(flag ? 'есть' : 'нет');


/**
 * Task #2
 *
 * необходимо создать функцию hasElem, которая параметром будет принимать массив
 * и возвращать true, если 'c' есть в массиве, и false - если нет
 */

/**
 *
 * @param arr
 * @returns {boolean}
 */
const hasElem = (arr = ['a', 'b', 'c', 'd']) => {
	let flag = false;
	for (const item of arr) {
		if (item === 'c') {
			flag = true;
			break;
		}
	}
	return flag;
};

/**
 * Task #3
 *
 * Дан массив с числами. Проверьте, что в этом массиве есть число 5.
 * Если есть - выведите 'да', а если нет - выведите 'нет'.
 */

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8,];

let flag2 = false;

for (const item of arr2) {
	if (item === 5) {
		flag2 = true;
		break;
	}
}

console.log(flag2 ? 'да' : 'нет');

/**
 * Task #4
 *
 * Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.
 * То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30.
 * Если число не делится - выведите 'false', а если делится - выведите 'true'.
 */

/**
 *
 * @param {number} n
 * @returns {boolean}
 */
const isSimpleNumber = (n) => {
	let flag = false;
	for (let i = 2; i < n; ++i) {
		if (n % i === 0) {
			flag = true;
			break;
		}
	}
	return flag;
};

/**
 * Task #5
 *
 * Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
 * Если есть - выведите 'да', а если нет - выведите 'нет'.
 */

const arr3 = [1, 2, 3, 4, 5, 6, 7, 7,];

let flag3 = false;

for (let i = 0; i < arr3.length - 1; i++) {
	if (arr3[i] === arr3[i + 1]) {
		flag3 = true;
		break;
	}
}

console.log(flag3 ? 'да' : 'нет');
