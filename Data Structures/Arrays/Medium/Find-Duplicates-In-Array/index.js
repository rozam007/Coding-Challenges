const findDuplicates = (nums) => {
    const mappings = new Map();
    const result = [];

    for (let num of nums) {
        mappings.set(num, (mappings.get(num) || 0) + 1);
    }

    console.log('mappings: ', mappings)

    for (let [key, value] of mappings) {
        if (value > 1) {
            result.push(key);
        }
    }

    return result;
};

findDuplicates([4,3,2,7,8,2,3,1])