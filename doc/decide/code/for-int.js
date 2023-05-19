/**
 * Print 10 integers to the terminal.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const max = 10;
    for (let i = 0; i < max; i++) {
        ns.tprintf(`${i}`);
    }
    ns.tprintf(`Printed ${max} integers.`);
}
