/**
 * Sum of integers from 0 to 9, inclusive.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const max = 10;
    let sum = 0;
    for (let i = 0; i < max; i++) {
        sum += i;
    }
    ns.tprintf(`Sum is ${sum}`);
}
