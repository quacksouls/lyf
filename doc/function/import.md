# Import and export

As you gain more experience in JavaScript programming, you might notice that
some of your scripts share a lot of common code. Instead of duplicating code
across multiple scripts, you want a function that does a task and use this
function in multiple scripts. Essentially you want to write a function once and
use it anywhere.

Consider the script [`tabby-profile.js`](../data/code/tabby-profile.js) from an
exercise in the section [_String me along_](../data/string.md), reproduced below
for reference:

[import](../data/code/tabby-profile.js)

The script prints Tabby's full name, a picture of Tabby, together with what
Tabby likes and dislikes. Sam wants to output the following profile to the
terminal:

[import](code/sam-profile.js)

As you can see, the scripts [`tabby-profile.js`](../data/code/tabby-profile.js)
and [`sam-profile.js`](code/sam-profile.js) share a lot of common code. In each
of these scripts, you can write a function that prints the following to the
terminal: full name, like, dislike. You would then have the same or similar
function in two scripts. As you do not want to duplicate code, a better option
would be to write a function that prints a profile, then use that function in
each of the above scripts.

Some questions come to mind. Where should you place the profile function? How
are you to use the profile function in multiple scripts? You write the profile
function in a separate file. Let's call this file [`util.js`](code/util.js),
whose purpose is to serve as a repository of utility functions that are used in
multiple scripts. Create the file [`util.js`](code/util.js) in the top-most
directory like all scripts you have created so far. For now, the content of
[`util.js`](code/util.js) is like this:

[import](code/util.js)

The keyword `export` as used above means other scripts can now use the function
`profile()`. The scripts [`tabby-profile.js`](../data/code/tabby-profile.js) and
[`sam-profile.js`](code/sam-profile.js) can now be implemented like this:

[import](code/profile.js)

The keyword `import` allows you to use functions exported by a script. You
import functions into your script like so:

```js
import { funcNameA, funcNameB, ... } from "/path/to/fileName.js";
```

The files [`util.js`](code/util.js) and [`profile.js`](code/profile.js) are in
the same directory, meaning that you can replace the pattern
`"/path/to/fileName.js"` with `"util.js"`. If [`util.js`](code/util.js) is
located within another directory and its absolute path is `/mydir/util.js`, then
you must replace the pattern `"/path/to/fileName.js"` with `"/mydir/util.js"`.
