/**
 * Boolean or.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const coffee = true;
    const tea = false;
    const water = true;
    const beer = false;
    ns.tprintf(`Coffee or tea? ${coffee || tea}`);
    ns.tprintf(`Tea or water? ${tea || water}`);
    ns.tprintf(`Tea or beer? ${tea || beer}`);
}
