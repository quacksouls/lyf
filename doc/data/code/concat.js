/**
 * Various ways to concatenate strings.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const firstName = "Tabby";
    const lastName = "Whiskers";
    const a = firstName + " " + lastName; // Use + operator.
    const b = `${firstName} ${lastName}`; // Template literal.
    const c = firstName.concat(" ", lastName); // Method concat()
    ns.tprint(a);
    ns.tprint(b);
    ns.tprint(c);
}
