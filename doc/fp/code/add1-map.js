/**
 * Add 1 to each array element. Use the map() method.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [1, 2, 3, 4, 5];
    const addOne = (x) => x + 1;
    const result = array.map(addOne);
    ns.tprintf(`${result}`);
}
