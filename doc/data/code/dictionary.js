/**
 * A small dictionary.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const a = "aardvark";
    const b = "armadillo";
    const c = "aardwolf";
    const d = "Aardvark";
    ns.tprintf(`${b} < ${a}? ${b < a}`);
    ns.tprintf(`${c} < ${a}? ${c < a}`);
    ns.tprintf(`${b} < ${c}? ${b < c}`);
    ns.tprintf(`${a} < ${d}? ${a < d}`);
}
