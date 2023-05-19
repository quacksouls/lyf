/**
 * Profile of a pet.
 */
const pet = {
    name: "Charlie Chihuahua",
    age: 3,
    like: (food) => {
        switch (food) {
            case "milk bone":
                return true;
            case "citrus":
                return false;
            default:
                return "neutral";
        }
    },
};

/**
 * An object having a function as its value.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const bone = "milk bone";
    const citrus = "citrus";
    const strawberry = "strawberry";
    ns.tprintf(`Name: ${pet.name}`);
    ns.tprintf(`Age: ${pet.age}`);
    ns.tprintf(`Likes ${bone}? ${pet.like(bone)}`);
    ns.tprintf(`Likes ${citrus}? ${pet.like(citrus)}`);
    ns.tprintf(`Likes ${strawberry}? ${pet.like(strawberry)}`);
}
