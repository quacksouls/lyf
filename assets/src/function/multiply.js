/**
 * Multiply two numbers together.
 *
 * @param {number} a A number.
 * @returns {function} A function that multiplies each number by a.
 */
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

/**
 * A function that returns another function.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const double = multiply(2);
    const triple = multiply(3);

    ns.tprintf("Doubling");
    ns.tprintf(`1 -> ${double(1)}`);
    ns.tprintf(`2 -> ${double(2)}`);
    ns.tprintf(`3 -> ${double(3)}`);
    ns.tprintf("\n");

    ns.tprintf("Tripling");
    ns.tprintf(`1 -> ${triple(1)}`);
    ns.tprintf(`2 -> ${triple(2)}`);
    ns.tprintf(`3 -> ${triple(3)}`);
}
