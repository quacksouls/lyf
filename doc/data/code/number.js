/**
 * Largest and smallest numbers in JavaScript.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    ns.tprint(Number.MIN_VALUE); // 5e-324
    ns.tprint(Number.MIN_SAFE_INTEGER); // -9007199254740991
    ns.tprint(Number.MAX_VALUE); // 1.7976931348623157e+308
    ns.tprint(Number.MAX_SAFE_INTEGER); // 9007199254740991
}
