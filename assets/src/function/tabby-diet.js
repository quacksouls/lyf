/**
 * Food in Tabby's diet.
 *
 * @param {function} func A function to handle food.
 * @param {string} food A particular food.
 */
function diet(func, food) {
    func(food); // Invoke `func()` with the parameter `food`.
}

/**
 * Tabby's dietary preferences.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Functions to output food preferences.
    const fav = (food) => ns.tprintf(`Favourite food is ${food}`);
    const like = (food) => ns.tprintf(`Likes ${food}`);
    const hate = (food) => ns.tprintf(`Hates ${food}`);

    // Tabby's diet.
    diet(fav, "tuna"); // same as fav("tuna");
    diet(like, "cheese"); // same as like("cheese");
    diet(hate, "lemon"); // hate("lemon");
}
