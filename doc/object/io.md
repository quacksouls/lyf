# Objects and I/O

Objects can be written to files and be read from files. Text files are a common
means of sharing data between different programs. In Bitburner, you use the
function
[`ns.read()`](https://github.com/bitburner-official/bitburner-src/blob/dev/markdown/bitburner.ns.read.md)
to read from a text file. Use the function
[`ns.write()`](https://github.com/bitburner-official/bitburner-src/blob/dev/markdown/bitburner.ns.write.md)
to write to a text file. The script below writes an object to file. The script
then reads the object from file and compares the read object with the original
object.

```js
// object-io.js

/**
 * Write an object to file.  Read object from file.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Sam's profile as an object.
    const sam = {
        name: "Sam McPherson",
        age: 27,
        like: "sushi",
        dislike: "spinach",
    };

    const file = "sam.txt";
    const writeMode = "w";
    ns.write(file, JSON.stringify(sam), writeMode);
    const samobj = JSON.parse(ns.read(file));

    // Compare the read object with the original object.
    ns.tprintf(`Same name? ${sam.name === samobj.name}`);
    ns.tprintf(`Same age? ${sam.age === samobj.age}`);
    ns.tprintf(`Same like? ${sam.like === samobj.like}`);
    ns.tprintf(`Same dislike? ${sam.dislike === samobj.dislike}`);
}
```

The above script uses the method
[`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
to first convert an object to its string representation, then writes the string
to file. After reading the string representation from file, the script uses the
method
[`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
to convert the string representation to an object. As you can see,
`JSON.stringify()` and `ns.write()` can be used together to save an object to
file, whereas `JSON.parse()` and `ns.read()` allow you to read an object from
file.
