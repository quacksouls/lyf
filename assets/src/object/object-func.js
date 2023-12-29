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
