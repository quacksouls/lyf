---
title: Code
---

In egestas erat imperdiet sed euismod nisi porta lorem mollis. Elementum eu
facilisis sed odio morbi quis. Non tellus orci ac auctor augue mauris augue
neque. Elementum sagittis vitae et leo duis ut diam. Quisque egestas diam in
arcu. Suspendisse faucibus interdum posuere lorem ipsum. At quis risus sed
vulputate odio ut enim. Mauris cursus mattis molestie a iaculis. Adipiscing elit
duis tristique sollicitudin nibh sit amet. Sit amet consectetur adipiscing elit
ut aliquam purus sit amet. Massa eget egestas purus viverra accumsan. Iaculis
nunc sed augue lacus viverra vitae congue. Turpis tincidunt id aliquet
risus. Pretium lectus quam id leo in. Ullamcorper velit sed ullamcorper morbi
tincidunt. Felis donec et odio pellentesque. Fames ac turpis egestas integer
eget aliquet nibh praesent.

## Block quote

```md
> Veni, vidi, vici\
> (I came, I saw, I conquered)\
> --- Julius Caesar
```

> Veni, vidi, vici\
> (I came, I saw, I conquered)\
> --- Julius Caesar

```md
> Friends, Romans, countrymen, lend me your ears.\
> (Antony, Act 3, Scene 2)\
> *Julius Caesar*, William Shakespeare
```

> Friends, Romans, countrymen, lend me your ears.\
> (Antony, Act 3, Scene 2)\
> *Julius Caesar*, William Shakespeare

Purus semper eget duis at. Posuere ac ut consequat semper viverra nam libero
justo. Sed felis eget velit aliquet sagittis id consectetur purus ut. Lectus
urna duis convallis convallis tellus. Augue ut lectus arcu bibendum at varius
vel pharetra. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Nulla
at volutpat diam ut venenatis tellus. Elit pellentesque habitant morbi tristique
senectus et netus et. Id interdum velit laoreet id donec ultrices. Justo laoreet
sit amet cursus sit amet dictum sit amet. Dui ut ornare lectus sit amet est
placerat in. Sit amet nulla facilisi morbi tempus iaculis urna id. Euismod
lacinia at quis risus sed vulputate odio ut enim. Nisi vitae suscipit tellus
mauris. Tortor id aliquet lectus proin nibh nisl.

## Inline

```md
Example of `inline code`.
```

Example of `inline code`.

```md
Use Python to `print(this)`.
```

Use Python to `print(this)`.

```md
Find goodies at `/path/to/goodies`{: .filepath}.
```

Find goodies at `/path/to/goodies`{: .filepath}.

Ut aliquam purus sit amet luctus venenatis lectus magna. Pellentesque habitant
morbi tristique senectus et. Elementum curabitur vitae nunc sed velit. Convallis
a cras semper auctor neque vitae. Diam vulputate ut pharetra sit amet aliquam id
diam maecenas. Lacus vel facilisis volutpat est. Viverra suspendisse potenti
nullam ac. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus
accumsan. Tellus mauris a diam maecenas sed enim ut sem. Consectetur lorem donec
massa sapien faucibus et molestie. Urna molestie at elementum eu facilisis sed
odio. Metus dictum at tempor commodo ullamcorper a lacus. Nisl condimentum id
venenatis a condimentum vitae sapien pellentesque.

## Programming language

Default is plaintext without line numbering.

```
def count(n):
    """
    Count to n.
    """
    for i in range(1, n + 1):
        print(i)

def greet():
    """
    Say hello.
    """
    print("Hello, world!")

if __name__ == "__main__":
   greet()
   count(10)
```

Must specify a target language for syntax highlighting. Line numbering is on by
default.

```python
def count(n):
    """
    Count to n.
    """
    for i in range(1, n + 1):
        print(i)

def greet():
    """
    Say hello.
    """
    print("Hello, world!")

if __name__ == "__main__":
   greet()
   count(10)
```

Use the attribute `{: .nolineno}` to turn off line numbering.

```python
def count(n):
    """
    Count to n.
    """
    for i in range(1, n + 1):
        print(i)

def greet():
    """
    Say hello.
    """
    print("Hello, world!")

if __name__ == "__main__":
   greet()
   count(10)
```
{: .nolineno }

JavaScript wants to join in the fun.

```js
/**
 * Count to n.
 */
function count(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

/**
 * Say hello.
 */
function greet() {
    console.log("Hello, world!");
}

greet();
count(10);
```

Haskell's turn:

```haskell
myMax :: Integer -> Integer -> Integer
myMax x y = maximum [x, y]

maxInt :: [Integer] -> Integer
maxInt [] = error "Cannot be empty list"
maxInt [x] = x
maxInt (x:xs) = myMax x (maxInt xs)
```

Use the attribute `{: file="path/to/file" }` to specify the file path.

```haskell
myMax :: Integer -> Integer -> Integer
myMax x y = maximum [x, y]

maxInt :: [Integer] -> Integer
maxInt [] = error "Cannot be empty list"
maxInt [x] = x
maxInt (x:xs) = myMax x (maxInt xs)
```
{: file="/path/to/max.hs" }

Sem nulla pharetra diam sit amet. Rhoncus est pellentesque elit
ullamcorper. Quam vulputate dignissim suspendisse in est ante. Arcu non odio
euismod lacinia at quis risus sed. Tortor pretium viverra suspendisse
potenti. Risus viverra adipiscing at in. Quam adipiscing vitae proin sagittis
nisl. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Purus non
enim praesent elementum. Lobortis mattis aliquam faucibus purus in
massa. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.

Vel pretium lectus quam id leo in vitae turpis. Massa sapien faucibus et
molestie. Metus vulputate eu scelerisque felis imperdiet. Pharetra diam sit amet
nisl suscipit adipiscing bibendum est ultricies. Scelerisque fermentum dui
faucibus in. Pulvinar proin gravida hendrerit lectus a. Ut porttitor leo a diam
sollicitudin. Orci sagittis eu volutpat odio facilisis mauris sit. At varius vel
pharetra vel turpis nunc eget lorem dolor. Nec feugiat in fermentum posuere urna
nec tincidunt. Rhoncus dolor purus non enim praesent elementum facilisis leo
vel. Adipiscing at in tellus integer feugiat scelerisque varius. Feugiat pretium
nibh ipsum consequat nisl vel pretium. Tellus orci ac auctor augue mauris. Nam
aliquam sem et tortor consequat id porta nibh. Molestie a iaculis at erat
pellentesque adipiscing commodo. Praesent semper feugiat nibh sed pulvinar proin
gravida. Massa eget egestas purus viverra accumsan in nisl nisi. Elementum nisi
quis eleifend quam adipiscing. Mi sit amet mauris commodo quis.

Non tellus orci ac auctor augue mauris augue neque gravida. Tortor at auctor
urna nunc id cursus metus aliquam eleifend. Mattis ullamcorper velit sed
ullamcorper morbi tincidunt. Magna fermentum iaculis eu non diam. Proin sagittis
nisl rhoncus mattis rhoncus urna neque viverra justo. Pretium fusce id velit ut
tortor pretium. Sed lectus vestibulum mattis ullamcorper velit sed. Feugiat
vivamus at augue eget arcu dictum varius duis at. Cras sed felis eget velit. Ut
morbi tincidunt augue interdum velit euismod in pellentesque massa. Maecenas
accumsan lacus vel facilisis volutpat est. Vitae ultricies leo integer malesuada
nunc vel. Ac turpis egestas maecenas pharetra convallis posuere morbi. Viverra
accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean sed adipiscing
diam. Quis commodo odio aenean sed adipiscing diam donec adipiscing
tristique. Aliquam sem et tortor consequat. Purus non enim praesent elementum
facilisis. Etiam dignissim diam quis enim lobortis.
