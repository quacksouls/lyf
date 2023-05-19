/**
 * Insert elements into a set.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const set = new Set();
    set.add("one");
    set.add(2).add("B").add(false); // Chaining the method add().
    const setElem = [...set]; // spread syntax
    ns.tprintf(`Set elements: ${setElem}`);
}
