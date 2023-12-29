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
