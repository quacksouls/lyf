/**
 * Various ways to create strings.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    let pet = "cat";
    let age = 2;
    ns.tprint("I'm Sam.");
    ns.tprint('I have a cat called "Tabby".');
    ns.tprint(`My ${pet} is ${age} years old.`);
}
