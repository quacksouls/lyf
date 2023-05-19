/**
 * A variable whose value can be changed and
 * another variable whose value cannot be changed.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    let weekend = 2;
    weekend = 3;
    const daysInWeek = 7;
    ns.tprint(weekend);
    ns.tprint(daysInWeek);
    // daysInWeek = 5;
}
