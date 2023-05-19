/**
 * Boolean and.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const coffee = true;
    const tea = false;
    const water = true;
    const beer = false;
    ns.tprintf(`Coffee and tea? ${coffee && tea}`);
    ns.tprintf(`Coffee and water? ${coffee && water}`);
    ns.tprintf(`Tea and beer? ${tea && beer}`);
}
