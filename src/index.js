module.exports = function reverse (n) {
    let str = String(Math.abs(n));
    return Number(str.split("").reverse().join(""));
}
