const isAnagram = (s, t) => {
    if(s.length !== t.length){
        return false
    }
    
    const sMappings = {};
    const tMappings = {};

    for(let i=0; i<s.length; i++){
        if(s[i] in sMappings){
            sMappings[s[i]]+=1;
        }
        else{
            sMappings[s[i]]=1;
        }
    }

    for(let i=0; i<t.length; i++){
        if(t[i] in tMappings){
            tMappings[t[i]]+=1;
        }
        else{
            tMappings[t[i]]=1;
        }
    }

    for(let char in sMappings){
        if(sMappings[char] !== tMappings[char]){
            return false
        }
    }

    return true
};

console.log(isAnagram("anagram", "nagaram"))