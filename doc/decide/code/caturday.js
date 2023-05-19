/**
 * Is it Caturday yet?
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const today = "Saturday";
    if (today === "Saturday") {
        ns.tprintf("It's Caturday.");
    } else {
        ns.tprintf("Not Caturday.");
    }
}
