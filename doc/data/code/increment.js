/**
 * Pre- and post-increment.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    let k = 3;
    const a = ++k;
    k = 3;
    const b = k++;
    ns.tprint(`Pre-increment k: ${a}`);
    ns.tprint(`Post-increment k: ${b}`);
}
