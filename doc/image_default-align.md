---
title: Default alignment
---

## Default alignment

Centre aligned by default:

```html
<img src="cc.png" />
```

<img src="cc.png">

The image caption is delimited by the underscore character `_`.

<!-- prettier-ignore-start -->
```md
![img-description](cc.png)
_An image caption._
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
![img-description](cc.png)
_An image caption._
<!-- prettier-ignore-end -->

For an SVG image, you must specify the width `w` and height `h`.

<!-- prettier-ignore-start -->
```md
![Desktop View](haskell.svg){: w="105" h="74" }
_An SVG image._
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
![Desktop View](haskell.svg){: w="105" h="74" }
_An SVG image._
<!-- prettier-ignore-end -->
