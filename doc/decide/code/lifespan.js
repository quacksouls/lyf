/**
 * Tabby's lifespan.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const age = 2;
    const name = "Tabby";
    if (0 <= age && age <= 0.5) {
        ns.tprintf(`${name} is a kitten.`);
    } else if (0.5 < age && age <= 2) {
        ns.tprintf(`${name} is a junior.`);
    } else if (2 < age && age <= 6) {
        ns.tprintf(`${name} is in the prime stage.`);
    } else if (6 < age && age <= 10) {
        ns.tprintf(`${name} is a mature.`);
    } else {
        ns.tprintf("More than a decade with Sam.");
    }
}
