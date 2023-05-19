/**
 * Whether a character is a punctuation character.
 *
 * @param {string} s A character.
 * @returns {boolean} True if the given character is a punctuation character;
 *     false otherwise.
 */
function isPunctuation(s) {
    switch (s) {
        case ".":
        case "?":
        case "!":
        case ",":
        case ";":
        case ":":
        case "-":
        case "'":
            return true;
        default:
            return false;
    }
}

/**
 * Whether a character is a vowel.
 *
 * @param {string} s A character of the English alphabet.
 * @returns {boolean} True if the given character is a vowel;
 *     false otherwise.
 */
function isVowel(s) {
    const vowel = "aeiou";
    const sc = s.toLowerCase();
    return vowel.includes(sc);
}

/**
 * Keep all characters that pass a particular test.
 *
 * @param {function} func A test function.  The function should return
 *     true if the test passes and false otherwise.
 * @param {string} str Test each character of this string.
 * @returns {string} All characters of the given string that pass the test.
 */
function keep(func, str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (func(str[i])) {
            newStr = newStr.concat(str[i]);
        }
    }
    return newStr;
}

/**
 * A function that accepts another function as parameter.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const strA = "Everyday is caturday.";
    const vowel = keep(isVowel, strA);
    ns.tprintf(`Original string: ${strA}`);
    ns.tprintf(`Vowels only: ${vowel}`);
    ns.tprintf("\n");

    const strB = "Cate's cat scatters its food about. What a catastrophe!";
    const punc = keep(isPunctuation, strB);
    ns.tprintf(`Original string: ${strB}`);
    ns.tprintf(`Punctuation characters: ${punc}`);
}
