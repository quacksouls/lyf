/**
 * MIT License
 *
 * Copyright (C) 2023 Duck McSouls <quacksouls [AT] gmail [DOT] com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
