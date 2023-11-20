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

Inline some mathematics by single dollar signs `$`.  This inlining
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

Use double dollar signs to typeset a block of mathematics.  This code

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

Standard normal distribution

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

Natoque penatibus et magnis dis. Tempus imperdiet nulla malesuada pellentesque
elit eget gravida. Ultrices mi tempus imperdiet nulla malesuada
pellentesque. Massa tempor nec feugiat nisl pretium fusce id. In ornare quam
viverra orci sagittis eu volutpat. Ultricies leo integer malesuada nunc
vel. Diam donec adipiscing tristique risus nec. Ultrices gravida dictum fusce ut
placerat. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida
neque. Sed vulputate mi sit amet mauris commodo quis. Rhoncus aenean vel elit
scelerisque mauris. At erat pellentesque adipiscing commodo elit at. Fermentum
posuere urna nec tincidunt. In fermentum posuere urna nec tincidunt praesent
semper feugiat nibh.

Sem et tortor consequat id porta nibh. Ultricies leo integer malesuada nunc
vel. Ultricies mi quis hendrerit dolor magna eget. Suspendisse ultrices gravida
dictum fusce ut placerat orci nulla. Sed faucibus turpis in eu mi
bibendum. Pretium quam vulputate dignissim suspendisse in est ante in. Malesuada
proin libero nunc consequat interdum. Mauris ultrices eros in cursus turpis
massa. Posuere sollicitudin aliquam ultrices sagittis orci a. Orci porta non
pulvinar neque laoreet suspendisse. Cursus mattis molestie a iaculis at erat
pellentesque adipiscing.

Bibendum arcu vitae elementum curabitur vitae nunc sed velit
dignissim. Pellentesque habitant morbi tristique senectus et. Eget mauris
pharetra et ultrices neque ornare aenean euismod elementum. Nibh mauris cursus
mattis molestie a iaculis at. Proin sagittis nisl rhoncus mattis rhoncus urna
neque. Quis viverra nibh cras pulvinar. Rutrum tellus pellentesque eu tincidunt
tortor. Condimentum lacinia quis vel eros donec ac. Eleifend mi in nulla posuere
sollicitudin aliquam ultrices sagittis. Arcu cursus vitae congue mauris rhoncus
aenean vel. Vitae semper quis lectus nulla at volutpat diam ut. Habitant morbi
tristique senectus et netus et. Consequat nisl vel pretium lectus quam id leo in
vitae.

Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Vitae turpis massa
sed elementum tempus egestas. Sed blandit libero volutpat sed cras ornare
arcu. Turpis cursus in hac habitasse platea dictumst quisque. Odio pellentesque
diam volutpat commodo sed. Quis lectus nulla at volutpat diam ut venenatis
tellus in. Adipiscing bibendum est ultricies integer. Lorem donec massa sapien
faucibus. Hendrerit dolor magna eget est lorem ipsum dolor. Ut sem viverra
aliquet eget sit amet tellus cras. Metus aliquam eleifend mi in nulla posuere
sollicitudin aliquam ultrices. Varius duis at consectetur lorem donec massa
sapien. Risus at ultrices mi tempus. Dui sapien eget mi proin sed
libero. Aliquam sem fringilla ut morbi tincidunt. Velit aliquet sagittis id
consectetur purus ut faucibus pulvinar. Nec feugiat nisl pretium fusce.

Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Sit amet nulla
facilisi morbi tempus iaculis urna. Vestibulum sed arcu non odio euismod
lacinia. Varius vel pharetra vel turpis nunc eget. At imperdiet dui accumsan sit
amet nulla facilisi morbi. Leo in vitae turpis massa. Ante in nibh mauris cursus
mattis molestie a iaculis. Enim neque volutpat ac tincidunt vitae semper quis
lectus. Vitae sapien pellentesque habitant morbi. Mattis pellentesque id nibh
tortor id aliquet. Ullamcorper malesuada proin libero nunc consequat interdum
varius sit amet. Vulputate ut pharetra sit amet aliquam id.

Vitae tempus quam pellentesque nec nam aliquam sem et. Cursus metus aliquam
eleifend mi in. Non nisi est sit amet facilisis magna. Faucibus a pellentesque
sit amet. Fusce ut placerat orci nulla pellentesque. A arcu cursus vitae
congue. At tempor commodo ullamcorper a lacus vestibulum. Diam quam nulla
porttitor massa id neque aliquam. Massa sed elementum tempus egestas sed sed
risus pretium quam. Faucibus a pellentesque sit amet porttitor eget. Sodales
neque sodales ut etiam sit amet. Faucibus nisl tincidunt eget nullam non nisi
est sit. Orci phasellus egestas tellus rutrum tellus pellentesque eu
tincidunt. Elementum sagittis vitae et leo duis ut. Vestibulum sed arcu non odio
euismod lacinia at. Morbi tristique senectus et netus et malesuada fames ac
turpis. Egestas maecenas pharetra convallis posuere.

Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Ut
tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Gravida
rutrum quisque non tellus orci. Feugiat vivamus at augue eget arcu dictum. Non
arcu risus quis varius quam. Auctor urna nunc id cursus metus aliquam
eleifend. Ut consequat semper viverra nam libero justo laoreet sit. Et egestas
quis ipsum suspendisse. Ultrices eros in cursus turpis massa. Nunc scelerisque
viverra mauris in. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Ac
turpis egestas integer eget aliquet nibh praesent. Imperdiet massa tincidunt
nunc pulvinar. Arcu ac tortor dignissim convallis aenean et. Sed tempus urna et
pharetra pharetra massa massa ultricies mi. Et malesuada fames ac turpis egestas
sed.

Eget gravida cum sociis natoque penatibus et. Tristique sollicitudin nibh sit
amet. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Metus
vulputate eu scelerisque felis imperdiet proin fermentum. Nulla facilisi cras
fermentum odio. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum
varius. Id neque aliquam vestibulum morbi. Nisl purus in mollis nunc sed id
semper risus. Sed faucibus turpis in eu mi. Ultrices sagittis orci a
scelerisque. Risus quis varius quam quisque. Sodales ut eu sem integer vitae
justo. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Enim nec
dui nunc mattis enim ut tellus elementum sagittis. Mi proin sed libero enim
sed. Mauris in aliquam sem fringilla.

Aenean sed adipiscing diam donec adipiscing tristique risus nec. Lorem sed risus
ultricies tristique nulla aliquet enim tortor. Vitae nunc sed velit dignissim
sodales ut eu. Cras sed felis eget velit aliquet sagittis id consectetur. At
consectetur lorem donec massa. Sem viverra aliquet eget sit amet tellus. Id
aliquet lectus proin nibh nisl condimentum. Id interdum velit laoreet id. Nulla
pellentesque dignissim enim sit amet. Duis ut diam quam nulla porttitor massa id
neque. Nec ultrices dui sapien eget mi.
