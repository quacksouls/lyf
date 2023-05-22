# Learn you some JavaScript for fun

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

A tutorial on learning to program in JavaScript. We will use the game Bitburner
as a vehicle for learning. The game is available
[online](https://danielyxie.github.io/bitburner/) and through
[Steam](https://store.steampowered.com/app/1812820/Bitburner/).

[Read the HonKit formatted tutorial here](https://quacksouls.github.io/lyf/).

<!-- ====================================================================== -->

## Development

We customized various themes:

<!-- prettier-ignore -->
- [Ace](https://github.com/manchiyiu/gitbook-plugin-ace): The modified theme
  is [here](gitbook/gitbook-plugin-ace/ace.js).
- [include-codeblock](https://github.com/azu/gitbook-plugin-include-codeblock):
  Modified the theme of linked file names. The customized theme is
  [here](gitbook/gitbook-plugin-include-codeblock/templates/acefull-template.hbs).
  The styling is based upon
  [`codeblock-filename`](https://github.com/litmon/gitbook-plugin-codeblock-filename/blob/master/book/block.css).
- [prism](https://github.com/gaearon/gitbook-plugin-prism): In the file
  [`package.json`](https://github.com/gaearon/gitbook-plugin-prism/blob/master/package.json),
  we replaced the lines
  ```js
  "engines": {
    "gitbook": ">=2.4.1 <4.0.0"
  },
  ```
  with
  ```js
  "engines": {
    "gitbook": ">=2.4.1"
  },
  ```

<!-- ====================================================================== -->

## Acknowledgement

<!-- prettier-ignore -->
- [HonKit](https://github.com/honkit/honkit) is used to build the tutorial.
- [Miro's flowchart maker](https://miro.com/flowchart/) was used to create the
  flowcharts in the chapter [_Decision, decision_](doc/decide/README.md).
- [Sketchpad](https://sketch.io/sketchpad/) was used to create the route
  diagram in the section [_Check the dictionary_](doc/organize/map.md).
- [Snarling](https://github.com/Snarling) for providing
  [GUI scripts](https://github.com/Snarling/bitburner-scripts) upon which the
  chapter [_Ooey gooey_](doc/gui/README.md) is based.

<!-- ====================================================================== -->

## License

![CC BY-NC-SA 4.0](image/cc.png "CC BY-NC-SA 4.0")

This work is licensed under the terms of the Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0). Refer
to [this page](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) for
the full text of the license.
