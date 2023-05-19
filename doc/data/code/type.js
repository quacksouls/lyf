/**
 * What's my type?
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const s = "Tabby";
    ns.tprint(typeof s);
    ns.tprint(typeof "");
}
