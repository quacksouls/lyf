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
