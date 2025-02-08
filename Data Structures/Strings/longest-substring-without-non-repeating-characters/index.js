const lengthOfLongestSubstring = (s) => { 

    const map = new Map();
    let left = 0, maxLen = 0;

    for(let right = 0; right < s.length; right++){
        if(map.has(s[right]) && map.get(s[right]) >= left){
            left=map.get(s[right])+1;
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen;    
};

lengthOfLongestSubstring("abcabcbb");