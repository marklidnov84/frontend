const arr = [
    "ifmanwas",
    "meanttos",
    "tayonthe",
    "groundgo",
    "dwouldha",
    "vegivenu",
    "sroots ",
];

// for each word
// get the 0th element

let str = "";
for (let i = 0; i < 8; i++) {
    arr.forEach((e) => {
        const char = e[i];
        if (!char) {
            str += "";
        } else str += char;
    });

    str += " ";
}

console.log(str);
