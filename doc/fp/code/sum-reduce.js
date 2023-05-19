/**
 * Sum all numbers in an array. Use the reduce() method.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const initialValue = 0;
    const add = (accumulator, currentValue) => accumulator + currentValue;
    const sum = array.reduce(add, initialValue);
    ns.tprintf(`Array sum: ${sum}`);
}
