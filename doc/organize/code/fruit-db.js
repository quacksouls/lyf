/**
 * Use the getter and setter of a map.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const fruit = new Map();
    fruit.set("A", "apple");
    fruit.set("B", "banana").set("C", "cherry").set("D", "duku"); // chaining the setter
    ns.tprintf(`Database has ${fruit.size} entries.`);
    ns.tprintf(`Fruit name starting with D: ${fruit.get("D")}`);
    const allFruits = [...fruit.values()]; // spread syntax
    ns.tprintf(allFruits.join(", "));
}
