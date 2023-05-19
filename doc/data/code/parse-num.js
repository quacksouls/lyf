/**
 * Same or different?
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const a = 42;
    const b = 42.3;
    const as = "42";
    const bs = "42.3";
    ns.tprintf(`${a} = ${as}? ${a === as}`);
    ns.tprintf(`${b} = ${bs}? ${b === bs}`);
}
