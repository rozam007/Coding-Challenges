/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const stack = [];

        const parenMappings = {
            '{' : '}',
            '[' : ']',
            '(' : ')'
        }

        for(let paren of s){
            if(paren in parenMappings){
                stack.push(parenMappings[paren])
            }
            else if(stack.length === 0 || stack.pop() !== paren){
                 return false
            }
        }
        return stack.length === 0
};