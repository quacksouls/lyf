---
title: Dialog box
---

Let's begin by creating a simple dialog box. The whole interface of Bitburner is
an HTML document. You need to use a combination of CSS, HTML, and JavaScript to
create a dialog box and inject the code for that box into the HTML document of
Bitburner. By _inject_, we mean updating an HTML document on the fly. In the
case of Bitburner, we update its HTML document as the game is running. Consider
the script below to create a simple dialog box. Do not worry if you don't
understand everything in the script. We will walk through the script,
highlighting the important sections and code.

:include: file="assets/src/gui/box.js", line=25:-

Here's an image of the dialog box. The components of the box are labelled as
shown in the image.

<!-- prettier-ignore-start -->
![Dialog box](gui/box.png "Dialog box")
_Dialog box_
<!-- prettier-ignore-end -->
