/**
 * Arithmetics with boolean values.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    ns.tprint(true + true);
    ns.tprint(true - false);
    ns.tprint(false / true);
    ns.tprint(true / false);
    ns.tprint(true * false);
}
