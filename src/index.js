module.exports = function check(str, bracketsConfig) {
    let quotes = [];
    for (let q = 0; q < bracketsConfig.length; q++) {
        quotes.push(bracketsConfig[q].join(""));
    }
    for (let i = str.length; i >= 0; i--) {
        for (let j = 0; j < quotes.length; j++) {
            if (str.includes(quotes[j])) {
                str = str.replace(quotes[j], "");
            }
        }
    }
    return str === "";
};
