/**
 * Add 1 to each array element. Use the forEach() method.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [1, 2, 3, 4, 5];
    const result = [];
    const addOne = (x) => result.push(x + 1);
    array.forEach(addOne);
    ns.tprintf(`${result}`);
}
