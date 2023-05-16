# Am I pretty?

<!-- prettier-ignore -->
> Queen: Magic mirror on the wall, who's the fairest one of all?<br>
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
