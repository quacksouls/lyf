/**
 * Doing arithmetics in JavaScript.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const a = 1 - 2 * 3; // 1 - (2 * 3) = -5
    const b = 1 + 6 / 2; // 1 + (6 / 2) = 4
    const c = 1 - (8 / 2) * 2; // 1 - 8 / 2 * 2 = -7
    const d = (1 + 2) / (4 - 3); // 3 / 1 = 3
    ns.tprint(a);
    ns.tprint(b);
    ns.tprint(c);
    ns.tprint(d);
}
