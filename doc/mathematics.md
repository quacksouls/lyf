---
title: Mathematics
math: true
---

Mathematics typesetting is done using [MathJax](https://www.mathjax.org/). The
feature is off by default for performance reason. You must enable MathJax by
inserting the line

```yml
math: true
```

in the [front matter](https://jekyllrb.com/docs/front-matter/) of your Markdown
file.

## Inline maths

Inline some mathematics by single dollar signs `$`. This inlining
`$y = f(x)$` would render as $y = f(x)$.

Donec et odio pellentesque $y = mx + b$ diam volutpat commodo sed
egestas. Eget dolor morbi non arcu risus quis varius quam. Lorem donec massa
sapien faucibus et molestie ac feugiat. Aliquam purus sit amet luctus venenatis
lectus. In ante metus dictum at $\sqrt{3x-1}+(1+x)^2$ tempor commodo
ullamcorper a. Purus in $t^3 + pt + q = 0$ massa tempor nec
feugiat. Nam libero justo
$\cos(3\theta) = \frac{3q}{2p} \sqrt{\frac{-3}{p}}$ laoreet sit amet
cursus. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.

## Block maths

Use double dollar signs to typeset a block of mathematics. This code

```md
$$
x
=
\frac{
  -b \pm \sqrt{b^2 - 4ac}
}{
  2a
}
$$
```

would render as:

$$
x
=
\frac{
  -b \pm \sqrt{b^2 - 4ac}
}{
  2a
}
$$

The Cauchy-Schwarz inequality.

$$
\left(
  \sum_{k=1}^n a_k b_k
\right)^2
\leq
\left(
  \sum_{k=1}^n a_k^2
\right)
\left(
  \sum_{k=1}^n b_k^2
\right)
$$

An integral.

$$
\int_{-\infty}^{\infty}
\exp(x^2) \; dx
=
\sqrt{\pi}
$$

Standard normal distribution.

$$
\frac{1}{\sqrt{2\pi}}
\int_{-\infty}^{\infty}
\exp(-x^2/2) \; dx
=
1
$$

Matrices.

$$
O
=
\begin{bmatrix}
\cos\phi & \sin\phi \\
-\sin\phi & \cos\phi
\end{bmatrix}
$$

Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Egestas maecenas
pharetra convallis posuere morbi leo urna molestie at. Nulla porttitor massa id
neque. Erat nam at lectus urna duis convallis convallis tellus id. Tortor at
risus viverra adipiscing at in. Et leo duis ut diam quam nulla. Lorem ipsum
dolor sit amet consectetur adipiscing elit pellentesque habitant.

$$
A_{mn}
=
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$
