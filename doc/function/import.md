# Import and export

As you gain more experience in JavaScript programming, you might notice that
some of your scripts share a lot of common code. Instead of duplicating code
across multiple scripts, you want a function that does a task and use this
function in multiple scripts. Essentially you want to write a function once and
use it anywhere.

Consider the script `tabby-profile.js` from an exercise in the section
[_String me along_](../data/string.md), reproduced below for reference:

```js
// tabby-profile.js

/**
 * A profile of Tabby the cat.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const cyan = "\u001b[36m";
    const red = "\u001b[31m";
    const reset = "\u001b[0m";
    const name = "Name: Tabby Whiskers";
    const pic = "Pic: 🐱";
    const like = `${cyan}Likes${reset}: fish`;
    const hate = "Hates: broccoli";
    ns.tprintf(`${name}\n${pic}\n${like}\n${hate}`);
}
```

The script prints Tabby's full name, a picture of Tabby, together with what
Tabby likes and dislikes. Sam wants to output the following profile to the
terminal:

```js
// sam-profile.js

/**
 * A profile of Sam.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const name = "Name: Sam McPherson";
    const like = "Likes: sushi";
    const hate = "Hates: spinach";
    ns.tprintf(`${name}\n${like}\n${hate}`);
}
```

As you can see, the scripts `tabby-profile.js` and `sam-profile.js` share a lot
of common code. In each of these scripts, you can write a function that prints
the following to the terminal: full name, like, dislike. You would then have the
same or similar function in two scripts. As you do not want to duplicate code, a
better option would be to write a function that prints a profile, then use that
function in each of the above scripts.

Some questions come to mind. Where should you place the profile function? How
are you to use the profile function in multiple scripts? You write the profile
function in a separate file. Let's call this file `util.js`, whose purpose is to
serve as a repository of utility functions that are used in multiple scripts.
Create the file `util.js` in the top-most directory like all scripts you have
created so far. For now, the content of `util.js` is like this:

```js
/**
 * Print a profile to the terminal.
 *
 * @param {NS} ns The Netscript API.
 * @param {string} name A full name of someone or a pet.
 * @param {string} like The likes of someone or a pet.
 * @param {string} hate The dislikes of someone or a pet.
 */
export function profile(ns, name, like, hate) {
    const fname = `Name: ${name}`;
    const prefer = `Likes: ${like}`;
    const dislike = `Hates: ${hate}`;
    ns.tprintf(`${fname}\n${prefer}\n${dislike}`);
}
```

The keyword `export` as used above means other scripts can now use the function
`profile()`. The scripts `tabby-profile.js` and `sam-profile.js` can now be
implemented like this:

```js
// profile.js

import { profile } from "util.js";

/**
 * Output the profiles of Tabby and Sam to the terminal.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    profile(ns, "Tabby Whiskers", "fish", "broccoli");
    ns.tprintf("\n");
    profile(ns, "Sam McPherson", "sushi", "spinach");
}
```

The keyword `import` allows you to use functions exported by a script. You
import functions into your script like so:

```js
import { funcNameA, funcNameB, ... } from "/path/to/fileName.js";
```

The files `util.js` and `profile.js` are in the same directory, meaning that you
can replace the pattern `"/path/to/fileName.js"` with `"util.js"`. If `util.js`
is located within another directory and its absolute path is `/mydir/util.js`,
then you must replace the pattern `"/path/to/fileName.js"` with
`"/mydir/util.js"`.
