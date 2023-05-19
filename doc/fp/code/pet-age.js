/**
 * Sum the age of pets.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const db = [
        { name: "Charlie Chihuahua", age: 2 },
        { name: "Chirp O'Tweet", age: 1 },
        { name: "Goldie Horn", age: 1 },
        { name: "Hamsuke Hamton", age: 1 },
        { name: "Harry Speedbump", age: 2 },
        { name: "Robbie Hopster", age: 1 },
        { name: "Tabby Whiskers", age: 2 },
        { name: "Terry Terrier", age: 2 },
    ];
    const addAge = (accumulator, pet) => accumulator + pet.age;
    const initialValue = 0;
    const sum = db.reduce(addAge, initialValue);
    ns.tprintf(`Total age: ${sum}`);
}
