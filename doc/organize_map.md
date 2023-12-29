---
title: Check the dictionary
---

A [_map_][map], dictionary, hash table, or associative array all refer to the
same concept: a way of associating a unique _key_ to a _value_. The word _map_
is used in JavaScript. Arrays are a restricted version of a map. In an array, a
key (or index) must be a nonnegative integer and the corresponding value is the
array element at the given index. A map extends this key/value association by
allowing a key to be any number, a string, a boolean, or some other data type. A
JavaScript map can be thought of as a dictionary of the English language. Each
word in the dictionary is a key whose corresponding value is the definitions of
the word.

<!--=========================================================================-->

## Map construction

Use the [`new Map()`][mapConstructor] constructor to create an empty map. To
initialize the map with some key/value pairs, pass an array of arrays to the
constructor via this format:

```js
const map = new Map([
    [key1, value1],
    [key2, value2],
    ...,
    [keyN, valueN],
]);
```

As shown above, you pass an array to the constructor. Each entry (or element) of
the array is a subarray having 2 elements: the first element is the key, the
second being the corresponding value. The keys must be unique. You can pass in 2
or more subarrays that share the same key, but the subarray having the lowest
index will be retained. The number of entries in the map can be queried by means
of the property [`size`][size], which returns the number of (unique) keys in the
map. Use the method [`has()`][has] to determine whether a map has a specified
key. The following example uses a map to implement a simple database.

:include: file="assets/src/organize/person-db.js", line=25:-

<!--=========================================================================-->

## Map insertion

Use the method [`set()`][set] to add new entries to a map. The method takes 2
arguments:

```js
map.set(key, value);
```

The first argument is the key, the second the value associated with the given
key. The method [`get()`][get] allows you to query the value associated with a
key. The methods `set()` and `get()` are commonly referred to as _setter_ and
_getter_, respectively. These methods and their names provide clues to their
functionalities: to modify (i.e. `set()`) a store of data and to query (i.e.
`get()`) the store for a particular value.

The example below demonstrates the use of the setter and getter map methods. The
example shows that you can chain the setter method, similar to how you can chain
the set method [`add()`][add].

:include: file="assets/src/organize/fruit-db.js", line=25:-

Note that you can use the spread syntax to obtain an array of all values (i.e.
fruits) in a map. The spread syntax can similarly be used to obtain an array of
all keys in a map.

<!--=========================================================================-->

## Map deletion

Similar to a set, a map allows you to remove one entry or all entries at once.
The method [`delete()`][delete] accepts a key and attempts to remove the value
associated with the given key, if it exists in the map. The method
[`clear()`][clear] removes all entries from a map. The example below
demonstrates how to remove entries from a map.

:include: file="assets/src/organize/map-delete.js", line=25:-

<!--=========================================================================-->

## Map traversal

You have several options for traversing a map. The options can be organized
according to the following classification:

1. Traversal via a key. Use the method [`keys()`][keys].
1. Traversal via a value. Use the method [`values()`][values].
1. Traversal via key/value pair. Use the statement [`for...of`][forOf] or the
   map method [`forEach()`][forEach]. The method [`entries()`][entries] also
   allows you to iterate over each key/value pair and is more or less equivalent
   to using the `for...of` statement. The method `forEach()` expects a function
   that takes 2 parameters in this order: value and key.

The following example uses the above techniques to traverse the entries of a
map.

:include: file="assets/src/organize/map-walk.js", line=25:-

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
:exercise:
Read more about map [here][map].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Implement a database for the following superheroes and their real names:
<!-- prettier-ignore-end -->

1. Black Panther, T'Challa
1. Black Widow, Natasha Romanoff
1. Deadpool, Wade Wilson
1. Hulk, Bruce Banner
1. Scarlet Witch, Wanda Maximoff
1. Wonder Woman, Diana Prince

<!-- prettier-ignore-start -->
:exercise: label="exFruitdb"
Extend the script
:script: file="assets/src/organize/fruit-db.js"
by writing a function to determine whether the fruit database has a particular
fruit. The function accepts the name of a fruit. The function should not iterate
over each entry of the database.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Repeat [this exercise](#exFruitdb), but use a technique for map traversal.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Extend the script
:script: file="assets/src/organize/map-walk.js"
by writing a function that uses the method [`entries()`][entries] to iterate
over the entries of the pet database.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Consider the two pet databases below. Write a function that merges two maps. Use
the function to merge the two pet databases.
<!-- prettier-ignore-end -->

:include: file="assets/src/organize/pet-db.js", line=25:-

<!-- prettier-ignore-start -->
:exercise:
Consider the arrays below:
<!-- prettier-ignore-end -->

```js
const bookClub = ["Alice", "Allie", "Charlie", "Sam", "Terry"];
const coffeeClub = ["Alex", "Alice", "Chester", "Sam"];
```

Use a map to implement each array as a set. Do not use JavaScript [set][jsSet],
but instead use JavaScript [map][map] to implement functionalities of set. Write
a function that takes 2 maps and returns their set union. Apply your function to
the above 2 arrays. Repeat the exercise for each of set intersection, set
difference, and symmetric difference.

<!-- prettier-ignore-start -->
:exercise:
The image below shows a route diagram of Sam's local neighbourhood.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
![Tabby's route](organize/route.jpeg "Tabby's route")
_Tabby's route_
<!-- prettier-ignore-end -->

Tabby's current location is indicated by its (cat) icon. The treehouse icon
represents the local park, the pizza slice denotes the local pizzaria, the house
represents Sam's house, the trolly of books represents the local library, and
the sheep icon represents the farm where Shelly Sheep lives. A black line
between two icons means there is a direct path between the corresponding
entities. For example, there is a direct path from Sam's house to the pizzaria.
However, Sam must take an indirect path to the local park: go from the house to
the pizzaria, then to the park. Use a JavaScript map to represent the direct
path between two entities. Determine the shortest path from Tabby's location to
Sam's house.

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[add]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
[clear]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
[delete]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
[forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
[forOf]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
[get]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
[has]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
[jsSet]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[keys]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[mapConstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map
[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
[size]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
[values]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
<!-- prettier-ignore-end -->
