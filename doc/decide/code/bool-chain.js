/**
 * Chain multiple boolean expressions.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const today = "Saturday";
    if (today === "Saturday" || today === "Sunday") {
        ns.tprintf(`It's the weekend.`);
    } else {
        ns.tprintf(`Not the weekend, yet.`);
    }
}
