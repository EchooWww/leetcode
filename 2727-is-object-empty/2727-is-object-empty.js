/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // return Object.keys(obj).length === 0;
    return JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]" ;
};