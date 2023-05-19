/**
 * Create an array.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [3, 5, 7];
    ns.tprintf(`Element at index 0: ${array[0]}`);
    ns.tprintf(`Element at index 1: ${array[1]}`);
    ns.tprintf(`Element at index 2: ${array[2]}`);
    ns.tprintf(`Element at index 3: ${array[3]}`); // undefined
    ns.tprintf(`Element at index -1: ${array[-1]}`); // undefined
}
