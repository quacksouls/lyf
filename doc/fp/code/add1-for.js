/**
 * Add 1 to each array element. Use the for...of statement.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [1, 2, 3, 4, 5];
    const result = [];
    for (const x of array) {
        result.push(x + 1);
    }
    ns.tprintf(`${result}`);
}
