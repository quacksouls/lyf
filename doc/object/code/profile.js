/**
 * Print a profile to the terminal.
 *
 * @param {NS} ns The Netscript API.
 * @param {string} name A full name of someone or a pet.
 * @param {number} age The age of a person or pet.
 * @param {string} like The likes of someone or a pet.
 * @param {string} hate The dislikes of someone or a pet.
 */
function profile(ns, name, age, like, hate) {
    const fname = `Name: ${name}`;
    const howOld = `Age: ${age}`;
    const prefer = `Likes: ${like}`;
    const dislike = `Hates: ${hate}`;
    const pro = [fname, howOld, prefer, dislike].join("\n");
    ns.tprintf(`${pro}`);
}

/**
 * Output the profiles of Tabby and Sam to the terminal.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    profile(ns, "Tabby Whiskers", 2, "fish", "broccoli");
    ns.tprintf("\n");
    profile(ns, "Sam McPherson", 27, "sushi", "spinach");
}
