/**
 * Odd or even?
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const n = 8;
    let parity = "";
    if (n % 2 === 0) {
        parity = "even";
    } else {
        parity = "odd";
    }
    ns.tprintf(parity);
}
