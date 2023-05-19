/**
 * Print a number to the terminal.
 *
 * @param {NS} ns The Netscript API.
 * @param {number} n Print this number.
 */
function count(ns, n) {
    ns.tprintf(`${n}`);
}

/**
 * Count up.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    for (let i = 1; i < 11; i++) {
        count(ns, i);
    }
}
