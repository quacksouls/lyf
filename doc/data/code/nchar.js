/**
 * How many characters are in Tabby's full name?
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const name = "Tabby Whiskers";
    ns.tprintf(name.length);
}
