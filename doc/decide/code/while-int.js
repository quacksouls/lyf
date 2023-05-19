/**
 * A while loop equivalent of for-int.js.
 *
 * Print 10 integers to the terminal.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const max = 10;
    let i = 0;
    while (i < max) {
        ns.tprintf(`${i}`);
        i++;
    }
    ns.tprintf(`Printed ${max} integers.`);
}
