/**
 * Same or different?
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const n = 2;
    const a = n != "2";
    const b = n !== "2";
    ns.tprintf(`${n} != "2"? ${a}`);
    ns.tprintf(`${n} !== "2"? ${b}`);
}
