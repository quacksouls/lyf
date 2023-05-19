/**
 * Multiline string.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const shoppingList = "\n1. Apples\n2. Bananas\n3. Cherries";
    ns.tprint(shoppingList);
}
