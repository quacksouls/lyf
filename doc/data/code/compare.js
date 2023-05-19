/**
 * Comparing numbers.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const a = 1;
    const b = 2;
    ns.tprintf(`${a} < ${b}? ${a < b}`);
    ns.tprintf(`${a} > ${b}? ${a > b}`);
    ns.tprintf(`${a} <= ${b}? ${a <= b}`);
    ns.tprintf(`${a} >= ${b}? ${a >= b}`);
    ns.tprintf(`${a} = ${b}? ${a === b}`);
    ns.tprintf(`${a} != ${b}? ${a !== b}`);
}
