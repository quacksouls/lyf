/**
 * Salmon day for Tabby.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const today = "Thursday";
    const tomorrow = "Friday";
    const salmonDay = "Friday";

    if (today === salmonDay) {
        ns.tprintf("Today is Tabby's salmon day.");
    } else {
        ns.tprintf("No salmon for Tabby today.");
    }

    if (tomorrow === salmonDay) {
        ns.tprintf("Tomorrow will be Tabby's salmon day.");
    } else {
        ns.tprintf("No salmon for Tabby tomorrow.");
    }
}
