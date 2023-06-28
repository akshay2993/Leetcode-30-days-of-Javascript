/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        v: val,
        toBe(val1) {
            if(val1 === this.v) return true
            throw new Error("Not Equal")
        },
        notToBe(val2) {
            if(val2 !== this.v) return true
            throw new Error("Equal")
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
