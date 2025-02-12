/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mappings = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let res = 0;

    for(let i=0; i<s.length; i++){
        if(mappings[s[i]] < mappings[s[i+1]]){
            res-=mappings[s[i]]
        }
        else{
            res+=mappings[s[i]]
        }
    }
    return res;
};