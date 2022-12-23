# Hello, world

## What is this?

This tutorial will help you to learn computer programming. We will use
JavaScript as the programming language and the game Bitburner as the learning
environment. Why JavaScript? Why not Python? Or C, C++, Java, Ruby, or some
other language? I find JavaScript to be reasonably easy to learn. Python is also
easy to learn. However, I have not been able to find a programming game that
encourages its players to write, say, Python or Ruby code. Please contact me if
you encounter such a game for Python or Ruby or another language. The game
[ByteLegend](https://github.com/ByteLegend/ByteLegend) encourages its players to
write Java code. If you prefer Java, by all means give ByteLegend a go.

Why Bitburner? The game encourages you to write JavaScript code, not in a
programming language specifically designed for the game. Isn't that the same
purpose as [Screeps](https://store.steampowered.com/app/464350/Screeps_World/)?
Yes. I have spent much more time with Bitburner than I have with Screeps. By all
means use Screeps to learn JavaScript if you are so inclined. Bitburner offers
plenty of challenges for novice and seasoned programmers. It is possible to
write JavaScript programs that can automate the whole game for you. Any
discussion about how to play Bitburner is incidental to our main goal: use the
game to learn how to program in JavaScript.

## Bitburner

First, familiarize yourself with the Bitburner environment. Open the game in
[Steam](https://store.steampowered.com/app/1812820/Bitburner/) or use the
[online version](https://danielyxie.github.io/bitburner/). You should see
something similar to the left panel of the image below. The game places you at
the in-game tutorial. Continue with the tutorial if you want. Otherwise click
the button `SKIP TUTORIAL` and you should see something like the right panel of
the image below. This is the terminal window of the game. The terminal window,
abbreviated as terminal, is an area of the game that allows you to type in
various commands to play the game. You know you are at the terminal because the
`Terminal` tab is highlighted green. Spend some time exploring the other tabs.
When you are done, click on the `Terminal` tab to return to the terminal. Note
the `Overview` window at the top-right corner. Click on the arrow to minimize or
maximize the window.

![Bitburner interface](image/hello/interface.png "Bitburner interface")

## Your first program

When learning a programming language, the traditional first program you write is
called the `Hello, world` program. At the terminal, type `nano hello.js` as
shown in the left panel of the image below. The command `nano` launches an
editor in which you can write your JavaScript code. The argument `hello.js`
given to `nano` tells the command to open the code editor and create a template
file named `hello.js`. The command uses the file extension `.js` to figure out
that you want to create a JavaScript program. The code editor is shown in the
right panel of the image below. If you have not done so, explore other tabs and
familiarize yourself with the game's interface. When you are ready to code,
click on the tab `Script Editor` (or press the key combination <kbd>Alt</kbd> +
<kbd>e</kbd>) to return to the code editor.

![Hello, world!](image/hello/hello.png "Hello, world!")

Copy and paste the following program into the code editor:

```js
/** @param {NS} ns */
export async function main(ns) {
    ns.tprint("Hello, world!");
}
```

Click on the button `Save` (or press the key combination <kbd>Ctrl</kbd> +
<kbd>s</kbd>) to save the content of the script. Click on the `Terminal` tab (or
press the key combination <kbd>Alt</kbd> + <kbd>t</kbd>) to return to the
terminal. At the terminal, type the command `run hello.js` and press
<kbd>Enter</kbd> to run your first JavaScript program. The result is shown in
the following image. You should see the text `Hello, world!` printed to the
terminal.

![Run, hello, run](image/hello/run-hello.png "Run, hello, run")

[[TOC](README.md "Table of Contents")] [[Next](data.md "Data, darta, dayta")]

![CC BY-NC-SA 4.0](image/cc.png "CC BY-NC-SA 4.0") \
This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode).
