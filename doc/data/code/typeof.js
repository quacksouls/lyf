/**
 * The data type of a variable.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const n = 42;
    ns.tprint(typeof n);
    ns.tprint(typeof Infinity);
}
