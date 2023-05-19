/**
 * Raise a number to a given power.
 *
 * @param {number} base Raise this number to a power.
 * @param {number} exponent Raise base to this power.
 * @returns {number} Raise base to the given exponent.
 */
function pow(base, exponent) {
    const result = base ** exponent;
    return result;
}

/**
 * Exponentiation.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const n = pow(2, 3);
    ns.tprintf(`2 raised to the power of 3 is: ${n}`);
}
