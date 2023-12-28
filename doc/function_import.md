---
title: Import and export
---

As you gain more experience in JavaScript programming, you might notice that
some of your scripts share a lot of common code. Instead of duplicating code
across multiple scripts, you want a function that does a task and use this
function in multiple scripts. Essentially you want to write a function once and
use it anywhere.

<!-- prettier-ignore-start -->
Consider the script
:script: file="assets/src/data/tabby-profile.js"
from an exercise in the section [String me along](../data_string), reproduced
below for reference:
<!-- prettier-ignore-end -->

:include: file="assets/src/data/tabby-profile.js", line=25:-

The script prints Tabby's full name, a picture of Tabby, together with what
Tabby likes and dislikes. Sam wants to output the following profile to the
terminal:

:include: file="assets/src/function/sam-profile.js", line=25:-

<!-- prettier-ignore-start -->
As you can see, the scripts
:script: file="assets/src/data/tabby-profile.js"
and
:script: file="assets/src/function/sam-profile.js"
share a lot of common code. In each of these scripts, you can write a function
that prints the following to the terminal: full name, like, dislike. You would
then have the same or similar function in two scripts. As you do not want to
duplicate code, a better option would be to write a function that prints a
profile, then use that function in each of the above scripts.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
Some questions come to mind. Where should you place the profile function? How
are you to use the profile function in multiple scripts? You write the profile
function in a separate file. Let's call this file
:script: file="assets/src/function/util.js"
, whose purpose is to serve as a repository of utility functions that are used
in multiple scripts. Create the file
:script: file="assets/src/function/util.js"
in the top-most directory like all scripts you have created so far. For now, the
content of
:script: file="assets/src/function/util.js"
is like this:
<!-- prettier-ignore-end -->

:include: file="assets/src/function/util.js", line=25:-

<!-- prettier-ignore-start -->
The keyword `export` as used above means other scripts can now use the function
`profile()`. The scripts
:script: file="assets/src/data/tabby-profile.js"
and
:script: file="assets/src/function/sam-profile.js"
can now be implemented like this:
<!-- prettier-ignore-end -->

:include: file="assets/src/function/profile.js", line=25:-

The keyword `import` allows you to use functions exported by a script. You
import functions into your script like so:

```js
import { funcNameA, funcNameB, ... } from "/path/to/fileName.js";
```

<!-- prettier-ignore-start -->
The files
:script: file="assets/src/function/util.js"
and
:script: file="assets/src/function/profile.js"
are in the same directory, meaning that you can replace the pattern
`"/path/to/fileName.js"` with `"util.js"`. If
:script: file="assets/src/function/util.js"
is located within another directory and its absolute path is `/mydir/util.js`,
then you must replace the pattern `"/path/to/fileName.js"` with
`"/mydir/util.js"`.
<!-- prettier-ignore-end -->
