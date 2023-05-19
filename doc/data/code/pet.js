/**
 * Sam's pets.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const likeCat = true;
    const likeDog = true;
    const likeTiger = true;
    const likeWolf = false;
    ns.tprintf(`Sam likes cats and dogs? ${likeCat && likeDog}`);
    ns.tprintf(`Sam likes tiger or wolf? ${likeTiger || likeWolf}`);
    ns.tprintf(`Sam likes cat or tiger? ${likeCat || likeTiger}`);
    ns.tprintf(`Sam likes cat and tiger? ${likeCat && likeTiger}`);
}
