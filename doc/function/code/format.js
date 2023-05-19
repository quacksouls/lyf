/**
 * Format a number by prefixing it with a symbol.
 *
 * @param {string} sym Prefix a number with this symbol.
 * @returns {function} A function that formats a number.
 *     Use the given prefix in each formatted number.
 */
function format(sym) {
    return function (n) {
        return `${sym}${n.toFixed(2)}`;
    };
}

/**
 * Format a number in various ways.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Format various currencies.
    const dollar = format("$");
    const euro = format("€");
    const yen = format("¥");
    ns.tprintf("Various currencies");
    ns.tprintf(`${dollar(2.71)}`);
    ns.tprintf(`${euro(3.156)}`);
    ns.tprintf(`${yen(4.201)}`);
    ns.tprintf("\n");

    // Format positive/negative numbers.
    const negative = format("-");
    const positive = format("+");
    ns.tprintf("Various numbers");
    ns.tprintf(`${negative(6.78)}`);
    ns.tprintf(`${positive(7.107)}`);
}
