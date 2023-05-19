/**
 * Print a profile to the terminal.
 *
 * @param {NS} ns The Netscript API.
 * @param {object} obj A profile object as follows:
 * {
 *     name: Full name of person/pet,
 *     age: Age of person/pet,
 *     like: What person/pet likes,
 *     dislike: What person/pet dislikes
 * }
 */
function profile(ns, obj) {
    const name = `Name: ${obj.name}`;
    const age = `Age: ${obj.age}`;
    const like = `Likes: ${obj.like}`;
    const dislike = `Hates: ${obj.dislike}`;
    const pro = [name, age, like, dislike].join("\n");
    ns.tprintf(`${pro}`);
}

/**
 * Output the profiles of Tabby and Sam to the terminal.
 * Represent each profile as an object.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Sam's profile as an object.
    const sam = {
        name: "Sam McPherson",
        age: 27,
        like: "sushi",
        dislike: "spinach",
    };
    // Tabby's profile as an object.
    const tabby = {
        name: "Tabby Whiskers",
        age: 2,
        like: "fish",
        dislike: "broccoli",
    };

    profile(ns, tabby);
    ns.tprintf("\n");
    profile(ns, sam);
}
