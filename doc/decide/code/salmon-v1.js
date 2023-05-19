/**
 * Salmon day for Tabby.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const today = "Friday";
    const salmonDay = "Friday";
    if (today === salmonDay) {
        ns.tprintf("Today is Tabby's salmon day.");
    }
}
