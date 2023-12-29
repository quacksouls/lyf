---
title: Am I pretty?
order: 35
---

> _Queen:_ Magic mirror on the wall, who's the fairest one of all?\
> --- _Snow White and the Seven Dwarfs_, 1937

<!-- prettier-ignore-start -->
The first thing to note about the script
[`box.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/gui/box.js)
is the comment line:
<!-- prettier-ignore-end -->

```js
// eslint-disable-next-line
```

The term `eslint` refers to [ESLint][eslint], a tool to analyze JavaScript code
and help you find bugs/problems in your code. You might also want to use
[Prettier][prettier] to help you to automatically and consistently format all
your JavaScript files. The ESLint/Prettier combination helps to enforce a common
style for all your JavaScript code.

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

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[eslint]: https://eslint.org
[prettier]: https://prettier.io
<!-- prettier-ignore-end -->
