---
title: Your first program
order: 3
---

When learning a programming language, the traditional first program you write is
called the `Hello, world` program. At the terminal, type `nano hello.js` as
shown in the left panel of the image below and press <kbd>Enter</kbd>. The
command `nano` launches an editor in which you can write your JavaScript code.
The argument `hello.js` given to `nano` tells the command to open the code
editor and create a template file named `hello.js`. The command uses the file
extension `.js` to figure out that you want to create a JavaScript program. The
code editor is shown in the right panel of the image below. If you have not done
so, explore other tabs and familiarize yourself with the game's interface. When
you are ready to code, click on the tab <kbd>Script Editor</kbd> (or press the
key combination <kbd>Alt</kbd> + <kbd>e</kbd>) to return to the code editor.

<!-- prettier-ignore-start -->
![Hello, world!](hello/hello.png "Hello, world!")
_Hello, world!_
<!-- prettier-ignore-end -->

Copy and paste the following program into the code editor:

[`hello.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/hello/hello.js)
```js
/** @param {NS} ns */
export async function main(ns) {
    ns.tprint("Hello, world!");
}
```

Click on the button <kbd>Save</kbd> (or press the key combination
<kbd>Ctrl</kbd> + <kbd>s</kbd>) to save the content of the script. Click on the
<kbd>Terminal</kbd> tab (or press the key combination <kbd>Alt</kbd> +
<kbd>t</kbd>) to return to the terminal. At the terminal, type the command
`run hello.js` and press <kbd>Enter</kbd> to run your first JavaScript program.
The result is shown in the following image. You should see the text
`Hello, world!` printed to the terminal.

<!-- prettier-ignore-start -->
![Run, hello, run](hello/run-hello.png "Run, hello, run")
_Run, hello, run_
<!-- prettier-ignore-end -->

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
<strong>Exercise 1.</strong> The terminal is the area of Bitburner that allows you to enter commands and run
scripts. Read more about the terminal [here][terminal].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 2.</strong> The terminal accepts a number of commands. You have been using the command
`run`. From the terminal, enter the command `help` to find out more about
other commands you can enter from the terminal. Do not worry if you find the
information incomprehensible.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 3.</strong> The terminal command `help` allows you to find out more information about a
command. You might not always remember how to use the command `run`. Execute the
command `help run` at the terminal to refresh your memory.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 4.</strong> Might I interest you in a feline companion? Why not `buy cat` from the comfort
of your terminal?
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 5.</strong> What is that meowing you hear in the distance? Oh no, it is a tabby stuck in a
cat flap. Feel free to `help cat` whenever you are ready.
<!-- prettier-ignore-end -->

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[terminal]: https://github.com/bitburner-official/bitburner-src/blob/stable/src/Documentation/doc/basic/terminal.md
<!-- prettier-ignore-end -->
