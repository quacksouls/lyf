---
title: CSS
---

CSS is an acronym for [Cascading Style Sheets][css]. As a presentation language,
CSS is used to style elements of an HTML document. CSS handles styling and
presentation issues such as the colour, font, and position of an HTML element.

Consider the CSS as contained in the following string:

:include: file="assets/src/gui/css.js", line=25:-

The above CSS code defines various components that make up our dialog box. First
is the overall box itself. The box is sub-divided into various components: the
head and the body. The head is further sub-divided into the title and the button
to close the box. Here's an explanation of our box's components.

-   The block `.box` declares the default styling of the overall box itself. By
    default, the [`background`][background] of the box is declared to be black.
    If you want a different colour for the background, feel free to browse the
    list of [named colours][namedColours] and choose a colour you like. The text
    of the box has a default [`font`][font] size of 14 pixels and using Lucida
    Console as the font family. Here is a list of [common font
    families][websafeFonts]. We want the [`position`][position] of the box to be
    fixed. A benefit of having a fixed position for our box is that its position
    does not change when we scroll (either horizontally or vertically) through
    an HTML document. You can override one or more default styles of the box in
    the declaration of one or more components of the box. Below, we show how to
    override various default stylings.
-   The block `.box .head` is for styling the head of the box. The head is made
    up of 2 components: the block `.box .title` for styling the title and the
    block `.box .close` for styling the button to close the box. For now, the
    styling of `.box .head` is the default styling for `.box .title` and
    `.box .close`, hence we leave the declarations of the latter 2
    sub-components empty. In the head of the box, we override the default
    [`background`][background] colour by declaring the background colour of the
    head to be lime. The foreground [`color`][color] of the text is black. The
    [`display`][display] of the head is declared as `flex`, meaning we want to
    use a [flexible layout][flexibleLayout] for the head. The property
    [`justify-content`][justifyContent] is used to control the spacing of the
    sub-components in the head. For now, we use `space-between` to insert as
    much whitespace as possible between the sub-components. The head of the box
    has 2 sub-components. Therefore `justify-content: space-between;` means that
    the left and right sub-components are positioned to the left-most and
    right-most, respectively, of the head.
-   The styling of the body of the box is declared in the block `.box .body`. We
    want the foreground [`color`][color] of text in the body to be lime.

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[background]: https://developer.mozilla.org/en-US/docs/Web/CSS/background
[color]: https://developer.mozilla.org/en-US/docs/Web/CSS/color
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[display]: https://developer.mozilla.org/en-US/docs/Web/CSS/display
[flexibleLayout]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
[font]: https://developer.mozilla.org/en-US/docs/Web/CSS/font
[justifyContent]: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
[namedColours]: https://developer.mozilla.org/en-US/docs/Web/CSS/named-color
[position]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
[websafeFonts]: https://www.w3schools.com/csSref/css_websafe_fonts.php
<!-- prettier-ignore-end -->
