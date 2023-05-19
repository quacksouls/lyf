/**
 * A class having a static method.
 */
class Rectangle {
    /**
     * A static method is declared by using the "static" keyword.
     *
     * @param {number} width The width of a rectangle.
     * @param {number} height The height of a rectangle.
     * @returns {number} The area of a rectangle having the given width and height.
     */
    static area(width, height) {
        return width * height;
    }
}

/**
 * Use a static method without instantiating a class.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const width = 2;
    const height = 3;
    const area = Rectangle.area(width, height);
    ns.tprintf(`Rectangle`);
    ns.tprintf(`Width: ${width}`);
    ns.tprintf(`Height: ${height}`);
    ns.tprintf(`Area: ${area}`);
}
