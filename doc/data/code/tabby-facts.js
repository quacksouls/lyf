/**
 * Facts about Tabby.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    let age = 2;
    let can = 5;
    ns.tprintf(`Tabby is ${age} years old.`);
    age++;
    ns.tprintf(`Tabby will soon be ${age} years old.`);
    ns.tprintf(`Tabby had ${can} cans of food.`);
    can--;
    ns.tprintf(`After eating 1 can, Tabby now has ${can} cans.`);
}
