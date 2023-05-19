/**
 * Sum all numbers in an array. Use the for...of statement.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sum = 0;
    for (const x of array) {
        sum += x;
    }
    ns.tprintf(`Array sum: ${sum}`);
}
