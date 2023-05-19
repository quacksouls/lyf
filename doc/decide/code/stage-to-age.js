/**
 * Tabby's lifespan.
 * Life stage to age range.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const stage = "junior";
    let ageRange = "";
    switch (stage) {
        case "kitten":
            ageRange = "birth to 6 months";
            break;
        case "junior":
            ageRange = "7 months to 2 years";
            break;
        case "prime":
            ageRange = "3 to 6 years";
            break;
        case "mature":
            ageRange = "7 to 10 years";
            break;
        default:
            ageRange = "over 10 years";
    }
    ns.tprintf(`Tabby's age range: ${ageRange}`);
}
