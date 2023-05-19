/**
 * Count the number of times i appears in a string.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const s = "Mississippi";
    let k = 0;
    let n = 0; // Count number of i.
    while (k < s.length) {
        if (s[k] === "i") {
            n++;
        }
        k++;
    }
    ns.tprintf(`"i" occurs ${n} times`);
}
