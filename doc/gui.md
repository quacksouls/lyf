# Ooey gooey

> Wombat stew,\
> Wombat stew,\
> Gooey, brewy,\
> Yummy, chewy,\
> Wombat stew!\
> -- Marcia K. Vaughan. _Wombat Stew._ Silver Burdett Pr, 1986

<!-- ====================================================================== -->

## Dialog box

Let's begin by creating a simple dialog box. The whole interface of Bitburner is
an HTML document. You need to use a combination of CSS, HTML, and JavaScript to
create a dialog box and inject the code for that box into the HTML document of
Bitburner. By _inject_, we mean updating an HTML document on the fly. In the
case of Bitburner, we update its HTML document as the game is running. Consider
the script below to create a simple dialog box. Do not worry if you don't
understand everything in the script. We will walk through the script,
highlighting the important sections and code.

```js
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
```

Here's an image of the dialog box.

![Dialog box](../image/gui/box.png "Dialog box")

<!-- ====================================================================== -->

### Am I pretty?

> Queen: Magic mirror on the wall, who's the fairest one of all?\
> --- _Snow White and the Seven Dwarfs_, 1937

The first thing to note in the above script is the comment line:

```js
// eslint-disable-next-line
```

The term `eslint` refers to [ESLint](https://eslint.org/), a tool to analyze
JavaScript code and help you find bugs/problems in your code. You might also
want to use [Prettier](https://prettier.io/) to help you to automatically and
consistently format all your JavaScript files. The ESLint/Prettier combination
helps to enforce a common style for all your JavaScript code.

The above comment line tells ESLint to ignore the line of code immediately
below. We want the line

```js
const doc = globalThis["document"];
```

to be as written, without any change by ESLint itself. If we remove the comment
line `// eslint-disable-next-line`, then ESLint would transform the above line
of code to

```js
const doc = globalThis.document;
```

which is not what we want.

[[TOC](../README.md "Table of Contents")]
[[Previous](fp.md "Let's get functional")] [[Next](bye.md "Wait, there's more")]