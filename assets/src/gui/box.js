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
 * Create a simple dialog box. This function is adapted from the code at
 *
 * https://github.com/Snarling/bitburner-scripts/blob/main/simplebox/simplebox-documented.js
 *
 * by https://github.com/Snarling
 *
 * @param {string} title The title of the box.
 * @param {string} content The content of the body of the box.
 * @returns {object} The created box.
 */
function createBox(title, content) {
    // A reference to the HTML document.
    // eslint-disable-next-line
    const doc = globalThis["document"];

    // CSS styles that will be injected into the HTML document.
    const css = `.box{
        background: black;
        font: 14px "Lucida Console";
        position: fixed;
    }
    .box .head{
        background: lime;
        color: black;
        display: flex;
        justify-content: space-between;
    }
    .box .title{
    }
    .box .close{
    }
    .box .body{
        color: lime;
    }`;

    // Inject a new style element.
    doc.head.insertAdjacentHTML(
        "beforeEnd",
        `<style id=box-css>${css}</style>`
    );

    // Inject a container (our box div) into the HTML document.
    doc.body.insertAdjacentHTML(
        "beforeEnd",
        "<div class=box>" +
            "<div class=head>" +
            `<span class=title>${title}</span>` +
            "<span class=close>X</span>" +
            "</div>" +
            `<div class=body>${content}</div>` +
            "</div>"
    );

    // A reference to the box div we just added.
    const box = doc.querySelector("body>div:last-of-type");

    // Initial position of the box.
    box.style.left = "500px";
    box.style.top = "800px";

    // The closing function.  Close the box after clicking on the "X".
    box.querySelector(".close").addEventListener("click", () => box.remove());

    return box;
}

/**
 * A simple dialog box.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    createBox("My box", "Hello, world!");
}
