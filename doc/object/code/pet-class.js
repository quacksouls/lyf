/**
 * A class to represent the profile of a pet.
 */
class Pet {
    name; // Name of pet. Public attribute.
    #age; // Age of pet. Private attribute.

    /**
     * Create an object to represent the profile of a pet.
     *
     * @param {string} name The name of a pet.
     * @param {number} age The pet's age.
     */
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    /**
     * The pet's age. The attribute #age is private, hence we require a
     * method to access the value of the attribute.
     *
     * @returns {number} The pet's age.
     */
    age() {
        return this.#age;
    }

    /**
     * Whether a pet likes a given food.
     *
     * @param {string} food Test this food.
     * @returns {any} Possible values:
     *
     *     (1) true := The pet likes the given food.
     *     (2) false := The pet does not like the given food.
     *     (3) neutral := Neutral about the given food.
     */
    like(food) {
        switch (food) {
            case "milk bone":
                return true;
            case "citrus":
                return false;
            default:
                return "neutral";
        }
    }

    /**
     * A profile of the pet.
     *
     * @returns {string} A pet's profile.
     */
    profile() {
        // Use the keyword "this" to access the class' attributes and methods.
        const name = `Name: ${this.name}`;
        const age = `Age: ${this.#age}`;
        const bone = "milk bone";
        const citrus = "citrus";
        const strawb = "strawberry";
        const likeBone = `Likes ${bone}? ${this.like(bone)}`;
        const likeCitrus = `Likes ${citrus}? ${this.like(citrus)}`;
        const likeStrawb = `Likes ${strawb}? ${this.like(strawb)}`;
        return [name, age, likeBone, likeCitrus, likeStrawb].join("\n");
    }

    /**
     * Set the pet's age. The attribute #age is private, hence cannot be
     * accessed/modified outside the class. Must declare a method to allow us
     * to modify the attribute's value.
     *
     * @param {number} age Age of the pet.
     */
    setAge(age) {
        this.#age = age;
    }
}

/**
 * Using a class to represent the profile of a pet.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const name = "";
    const age = 0;
    const pet = new Pet(name, age);
    pet.name = "Charlie Chihuahua";
    pet.setAge(3);
    ns.tprintf(`${pet.profile()}`);
}
