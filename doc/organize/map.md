# Check the dictionary

A
[_map_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map),
dictionary, hash table, or associative array all refer to the same concept: a
way of associating a unique _key_ to a _value_. The word _map_ is used in
JavaScript. Arrays are a restricted version of a map. In an array, a key (or
index) must be a nonnegative integer and the corresponding value is the array
element at the given index. A map extends this key/value association by allowing
a key to be any number, a string, a boolean, or some other data type. A
JavaScript map can be thought of as a dictionary of the English language. Each
word in the dictionary is a key whose corresponding value is the definitions of
the word.

<!-- ====================================================================== -->

## Map construction

Use the
[`new Map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)
constructor to create an empty map. To initialize the map with some key/value
pairs, pass an array of arrays to the constructor via this format:

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
of the property
[`size`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size),
which returns the number of (unique) keys in the map. Use the method
[`has()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)
to determine whether a map has a specified key. The following example uses a map
to implement a simple database.

[import](code/person-db.js)

<!-- ====================================================================== -->

## Map insertion

Use the method
[`set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)
to add new entries to a map. The method takes 2 arguments:

```js
map.set(key, value);
```

The first argument is the key, the second the value associated with the given
key. The method
[`get()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)
allows you to query the value associated with a key. The methods `set()` and
`get()` are commonly referred to as _setter_ and _getter_, respectively. These
methods and their names provide clues to their functionalities: to modify (i.e.
`set()`) a store of data and to query (i.e. `get()`) the store for a particular
value.

The example below demonstrates the use of the setter and getter map methods. The
example shows that you can chain the setter method, similar to how you can chain
the set method
[`add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add).

[import](code/fruit-db.js)

Note that you can use the spread syntax to obtain an array of all values (i.e.
fruits) in a map. The spread syntax can similarly be used to obtain an array of
all keys in a map.

<!-- ====================================================================== -->

## Map deletion

Similar to a set, a map allows you to remove one entry or all entries at once.
The method
[`delete()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)
accepts a key and attempts to remove the value associated with the given key, if
it exists in the map. The method
[`clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)
removes all entries from a map. The example below demonstrates how to remove
entries from a map.

[import](code/map-delete.js)

<!-- ====================================================================== -->

## Map traversal

You have several options for traversing a map. The options can be organized
according to the following classification:

1. Traversal via a key. Use the method
   [`keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys).
1. Traversal via a value. Use the method
   [`values()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values).
1. Traversal via key/value pair. Use the
   [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
   statement or the map method
   [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach).
   The method
   [`entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)
   also allows you to iterate over each key/value pair and is more or less
   equivalent to using the `for...of` statement. The method `forEach()` expects
   a function that takes 2 parameters in this order: value and key.

The following example uses the above techniques to traverse the entries of a
map.

[import](code/map-walk.js)

<!-- ====================================================================== -->

## Exercises

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Read more about map
[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Implement a database for the following superheroes and their real names:

1. Black Panther, T'Challa
1. Black Widow, Natasha Romanoff
1. Deadpool, Wade Wilson
1. Hulk, Bruce Banner
1. Scarlet Witch, Wanda Maximoff
1. Wonder Woman, Diana Prince

<!-- prettier-ignore -->
{% exercise label="fruit_db" %}{% endexercise %}
Extend the script [`fruit-db.js`](code/fruit-db.js) by writing a function to
determine whether the fruit database has a particular fruit. The function
accepts the name of a fruit. The function should not iterate over each entry of
the database.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Repeat [this exercise](map.md#fruit_db), but use a technique for map traversal.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Extend the script [`map-walk.js`](code/map-walk.js) by writing a function that
uses the method
[`entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)
to iterate over the entries of the pet database.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Consider the two pet databases below. Write a function that merges two maps. Use
the function to merge the two pet databases.

[import](code/pet-db.js)

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Consider the arrays below:

```js
const bookClub = ["Alice", "Allie", "Charlie", "Sam", "Terry"];
const coffeeClub = ["Alex", "Alice", "Chester", "Sam"];
```

Use a map to implement each array as a set. Do not use JavaScript
[set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set),
but instead use JavaScript
[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
to implement functionalities of set. Write a function that takes 2 maps and
returns their set union. Apply your function to the above 2 arrays. Repeat the
exercise for each of set intersection, set difference, and symmetric difference.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
The image below shows a route diagram of Sam's local neighbourhood.

![Tabby's route](../../image/organize/route.jpeg "Tabby's route")

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
