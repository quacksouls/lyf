class ClassName {
    // Public attributes/properties/fields. Can be modified outside of class.
    dataA;
    dataB;
    ...

    // Private attributes/properties/fields. Can't modify outside of class.
    #data1;
    #data2;
    ...

    /**
     * Use this method to create an object from the class.
     */
    constructor(paramA, paramB, ...) {
        // Code to create initial state of the object.
        this.dataA = 1;
        this.dataB = "abc";
        ...
        this.#data1 = "A string";
        this.#data2 = 42;
        ...

        // Other code goes here.
    }

    /**
     * A method for working with the class' data. A function declared within a
     * class is called a method.
     */
    methodA() {
        // Code to process some data.
    }

    // Insert other method declarations here.
}
