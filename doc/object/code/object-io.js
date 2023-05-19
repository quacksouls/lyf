/**
 * Write an object to file.  Read object from file.
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

    const file = "sam.txt";
    const writeMode = "w";
    ns.write(file, JSON.stringify(sam), writeMode);
    const samobj = JSON.parse(ns.read(file));

    // Compare the read object with the original object.
    ns.tprintf(`Same name? ${sam.name === samobj.name}`);
    ns.tprintf(`Same age? ${sam.age === samobj.age}`);
    ns.tprintf(`Same like? ${sam.like === samobj.like}`);
    ns.tprintf(`Same dislike? ${sam.dislike === samobj.dislike}`);
}
