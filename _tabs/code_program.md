---
title: Programming language
order: 9
---

The triple backticks can be used to insert programming code. The default is
plaintext without line numbering.

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

You must specify a target language for syntax highlighting. Line numbering is on
by default.

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

Use the attribute `{: .nolineno }` to turn off line numbering.

<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->

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

<!-- prettier-ignore-start -->
```haskell
myMax :: Integer -> Integer -> Integer
myMax x y = maximum [x, y]

maxInt :: [Integer] -> Integer
maxInt [] = error "Cannot be empty list"
maxInt [x] = x
maxInt (x:xs) = myMax x (maxInt xs)
```
{: file="/path/to/max.hs" }
<!-- prettier-ignore-end -->
